import React, { useState, useEffect, FormEvent } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import github from '../../services/api';

import CardBio from '../../components/CardBio';

import logoImg from '../../assets/logo.png';
import CardStar from '../../components/CardStar';
import { IStarProps } from '../../TS/Interfaces/IStarProps';
import { IUser } from '../../TS/Interfaces/IUser';

import {
    Logo,
    RadioButton,
    Item,
    RadioButtonLabel,
    Empty,
    Form,
    CleanFilterContainer,
    Error,
    Sections,
    Section,
    Container,
} from './styles';

type IStar = IStarProps & { id: number };

const Home: React.FC = () => {

    const [newUser, setNewUser] = useState('');
    const [inputError, setInputError] = useState('');
    const [radioSelect, setRadioSelect] = React.useState<'repos' | 'starred'>('repos')
    const [user, setUser] = useState<IUser>(() => {
        const storagedUser = localStorage.getItem('@GitHubFinder:user');

        if (storagedUser) {
            return JSON.parse(storagedUser);
        }

        return {} as IUser;
    });
    const [stars, setStars] = useState<IStar[]>(() => {
        const storagedStars = localStorage.getItem('@GitHubFinder:user-stars');

        if (storagedStars) {
            return JSON.parse(storagedStars);
        }

        return [] as IStarProps[];
    });

    useEffect(() => {
        localStorage.setItem('@GitHubFinder:user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('@GitHubFinder:user-stars', JSON.stringify(stars));
    }, [stars]);

    async function handleFindUser(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setNewUser('');
        setInputError('');

        try {
            const { data: userReturned } = await github.get<
                Omit<IUser, 'user_stars'>
            >(`/users/${newUser}`);

            if (userReturned.login) {
                const { data: starsReturned } = await github.get<IStar[]>(
                    `/users/${userReturned.login}/repos`,
                );

                if (starsReturned) {
                    setStars(starsReturned);
                }

                setUser({
                    ...userReturned,
                    user_stars: starsReturned.length,
                });
            } else {

            }
        } catch (err) {
            setInputError('Error na busca do usuário')
        }
    }

    const GetList = async () => {
        try {
            const { data: userReturned } = await github.get<
                Omit<IUser, 'user_stars'>
            >(`/users/${user.login}`);

            if (userReturned.login) {
                const { data: starsReturned } = await github.get<IStar[]>(
                    `/users/${userReturned.login}/${radioSelect}`,
                );

                if (starsReturned) {
                    setStars(starsReturned);
                }

                setUser({
                    ...userReturned,
                    user_stars: starsReturned.length,

                });
            } else {

            }
        } catch (err) {

        }
    }
    React.useEffect(() => {
        GetList()

        //eslint-disable-next-line
    }, [radioSelect])
    function handleClear() {
        setNewUser('');
        setInputError('');
        setUser({} as IUser);
        setStars([] as IStar[]);
        localStorage.removeItem('@GitHubFinder:user');
        localStorage.removeItem('@GitHubFinder:user-stars');
        localStorage.removeItem('@GitHubFinder:stars-liked');
        localStorage.removeItem('@GitHubFinder:coordinates');
    }

    return (
        <>
            <Container>
                <Logo src={logoImg} alt="Logo" />

                <Form hasError={!!inputError} onSubmit={handleFindUser}>
                    <input
                        value={newUser}
                        onChange={(e) => setNewUser(e.target.value)}
                        placeholder="Type user nickname here"
                    />
                    <button type="submit">Search</button>
                    {user.html_url && (
                        <CleanFilterContainer onClick={handleClear}>
                            <FiTrash2 />
                        </CleanFilterContainer>
                    )}
                </Form>

                {inputError && <Error>{inputError}</Error>}

                <Sections hasContent={!!user.login} style={{ minWidth: '100%' }}>

                    {user.login ? (
                        <>

                            <Section width={100} minWidth={500} hasContent={!!user.login}>
                                <CardBio
                                    image={user.avatar_url}
                                    name={user.name}
                                    bio={user.bio}
                                    amount_repositories={user.public_repos}
                                    amount_followers={user.followers}
                                    amount_following={user.following}
                                    amount_stars={user.user_stars}
                                    html_url={user.html_url}
                                    login={user.login}
                                />
                            </Section>

                            {stars[0]?.id ? (
                                <Section width={100} hasContent={!!user.login}>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            onChange={() => {
                                                setRadioSelect('starred')
                                            }}
                                            checked={radioSelect === 'starred'}
                                        />
                                        <RadioButtonLabel />
                                        <div>Favoritos</div>
                                    </Item>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            onChange={() => {
                                                setRadioSelect('repos')
                                            }}
                                            checked={radioSelect === 'repos'}
                                        />
                                        <RadioButtonLabel />
                                        <div>Reposotorios</div>
                                    </Item>
                                    {stars.map(
                                        ({
                                            id,
                                            name,
                                            description,
                                            forks_count,
                                            stargazers_count,
                                            html_url,
                                        }) => (
                                            <CardStar
                                                key={id}
                                                name={name}
                                                description={description}
                                                forks_count={forks_count}
                                                stargazers_count={stargazers_count}
                                                html_url={html_url}
                                            />
                                        ),
                                    )}
                                </Section>
                            ) :
                                <Section width={100} hasContent={!!user.login}>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            onChange={() => {
                                                setRadioSelect('starred')
                                            }}
                                            checked={radioSelect === 'starred'}
                                        />
                                        <RadioButtonLabel />
                                        <div>Favoritos</div>
                                    </Item>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="radio"
                                            onChange={() => {
                                                setRadioSelect('repos')
                                            }}
                                            checked={radioSelect === 'repos'}
                                        />
                                        <RadioButtonLabel />
                                        <div>Reposotorios</div>
                                    </Item>

                                    <Empty> Vazio </Empty>
                                </Section>
                            }
                        </>
                    ) : (
                        <>

                        </>
                    )}
                </Sections>
            </Container>
        </>
    );
};

export default Home;