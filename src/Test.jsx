export function ListItem(props){
    return <li> {props.animal}</li>
    
}

export function List(props){
    return(
        <ul>
            {props.animalList.map((animal)=> {
                return animal.startsWith("T") ? <ListItem key={animal} animal = {animal} /> : null ;
            })}
        </ul>
    );
}

export function Test(){
    const animals = ["Bear", "Zebra", "Tiger", "Panda", "Dog"];
    return (
        <div>
            <h1> Animals: </h1>
            <List animalList = {animals} />
        </div>
    );
    
}