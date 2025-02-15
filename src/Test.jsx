function ListItem(props){
    return (
        <li>{props.animalList}</li>
    )
}

function List(props){
    return(
        <ul>
            {props.animals.map((animal)=> {
                return <ListItem key = {animal} animalList = {animal} />;
            })}
        </ul>
    )
}

function Test(){
    const animals = ["Bear", "Zebra", "Tiger", "Panda", "Dog"];
    return (
        <div>
            <h1> Animals: </h1>
            <List animalList = {animals} />
        </div>
    );
    
}
export default Test;