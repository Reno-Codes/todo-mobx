function AddButton() {
    function handleAdd() {
        console.log("Add");
    }

    return <button onClick={() => handleAdd()}>Add</button>;
}

export default AddButton;
