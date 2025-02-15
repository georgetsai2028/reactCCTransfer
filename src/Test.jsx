export function ListItem(props){
    return <li> {props.animal}</li>
    
}

export function List(props){
    return(
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