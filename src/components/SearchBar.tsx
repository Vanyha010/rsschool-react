import React from 'react';

class SearchBar extends React.Component {
    searchValue: string;

    data: object;

    constructor(props: object | Readonly<object>) {
        super(props);
        this.searchValue = '';
        this.data = {};
    }

    changeInputValue(value: string) {
        this.setState({ state: (this.searchValue = value) });
    }

    setSearchData(data: object) {
        this.data = data;
    }

    async makeApiCall(value: string) {
        const result = await fetch(
            `
            https://rickandmortyapi.com/api/character/${value}`,
            {
                method: 'GET',
            }
        );
        const json = await result.json();
        console.log(json);
        this.setSearchData(json);
    }

    async componentDidMount(): Promise<void> {
        await this.makeApiCall(this.searchValue);
        console.log(this.data);
    }

    render(): React.ReactNode {
        return (
            <div>
                <div>
                    <h1>Find your Rick and Morty character</h1>
                    <input
                        type="text"
                        value={this.searchValue}
                        onChange={(e) => {
                            this.changeInputValue(e.target.value);
                        }}
                    />
                    <button onClick={() => this.makeApiCall(this.searchValue)}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
