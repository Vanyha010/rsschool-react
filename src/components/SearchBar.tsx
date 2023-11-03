import React from 'react';
import { Character } from '../types/types';
import { fetchCharacters, searchCharacter } from '../service/service';

interface Props {
    setCharacter: (characters: Character[]) => void;
}

type StateType = {
    inputValue: string;
    errorMsg: string;
};

class SearchBar extends React.Component<Props, StateType> {
    public state: StateType = {
        inputValue: localStorage.getItem('inputValue') || '',
        errorMsg: '',
    };

    changeInputValue(value: string) {
        this.setState({ inputValue: value });
    }

    submitInputValue() {
        localStorage.setItem('inputValue', this.state.inputValue);

        this.makeApiCall();
    }

    async makeApiCall() {
        const { setCharacter } = this.props;
        const { inputValue } = this.state;
        if (inputValue.length > 0) {
            try {
                const result = await searchCharacter(inputValue);
                const arr = [];
                arr.push(result);
                setCharacter(arr);
            } catch (err) {
                if (err instanceof Error) {
                    this.setState({ errorMsg: err.message });
                }
            }
        } else {
            try {
                const { results } = await fetchCharacters();
                setCharacter(results);
            } catch (err) {
                if (err instanceof Error) {
                    this.setState({ errorMsg: err.message });
                }
            }
        }
    }

    async componentDidMount(): Promise<void> {
        this.makeApiCall();
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
                    <button onClick={() => this.submitInputValue()}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
