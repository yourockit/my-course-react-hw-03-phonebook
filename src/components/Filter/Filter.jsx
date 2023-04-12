

export const Filter = ({searchContact}) => {
    return (
    <div>
        <label>
            Find contacts by name
            <br />
            <input type="text" onChange={searchContact} />
        </label>
    </div>
    );
};