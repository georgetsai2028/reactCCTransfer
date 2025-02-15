export function ListItem(props){
    return <li> {props.animal}</li>
    
}   

export function List(props){
    
        if (!props.animals)
        {
            return <div> Loading...</div>
        }

        if (props.animals.length === 0)
        {
            return <div>There are no animals in the list!</div>
        }
        return (
        <ul>
            {props.animalList.map((animal)=> {
                return animal.startsWith("T") && <ListItem key={animal} animal = {animal} />;
            })}
        </ul>
    );

}

export function Test(){
    const animals = ["Bear", "Zebra", "Tiger", "Panda", "Dog", "Terry the Tusk"];
    return (
        <div>
            <h1> Animals: </h1>
            <List animalList = {animals} />
        </div>
    );
    
}