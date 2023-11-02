import React from 'react';
import { Character, EmptyInputResponse } from '../types/types';
import { fetchCharacters, searchCharacter } from '../service/service';

interface Props {
    fetchCharacters: () => Promise<EmptyInputResponse>;
    searchCharacter: (id: number) => Promise<Character>;
}

type StateType = {
    inputValue: string;
    errorMsg: string;
};

class SearchBar extends React.Component<Props, StateType> {
    // searchValue: string;

    // data: object;

    public inputValue = '';

    public state: StateType = {
        inputValue: localStorage.getItem('inputValue') || '',
        errorMsg: '',
    };

    changeInputValue(value: string) {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue);
    }

    async makeApiCall() {
        const inputValue = this.state.inputValue;
        if (inputValue.length > 0) {
            try {
                const result = await searchCharacter(inputValue);
                console.log(result);
            } catch (err) {
                if (err instanceof Error) {
                    this.setState({ errorMsg: err.message });
                }
            }
        } else {
            try {
                const result = await fetchCharacters();
                console.log(result);
            } catch (err) {
                if (err instanceof Error) {
                    this.setState({ errorMsg: err.message });
                }
            }
        }
    }

    async componentDidMount(): Promise<void> {
        await this.makeApiCall();
    }

    render(): React.ReactNode {
        const inputValue = this.state.inputValue;
        return (
            <div>
                <div>
                    <h1>Find your Rick and Morty character</h1>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            this.changeInputValue(e.target.value);
                        }}
                    />
                    <button onClick={() => this.makeApiCall()}>Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
