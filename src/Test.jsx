export function ListItem(props){
    return <li> {props.animal}</li>
    
}   

export function List(props){
    return(
       <> 
       {!props.animalList && <div>Loading... </div>}
       {props.animalList && props.animalList.length > 0 && (
        <ul>
            {props.animalList.map((animal) =>{
            return <ListItem key={animal} animal= {animal} />;
            })}
        </ul>
       )}
       {props.animalList && props.animalList.length === 0 && <div> No animals in lists</div>}
       </>
    );
}


export function Test(){
    const animals = ["Dog", "Bear", "Lion"];
    return (
        <div>
            <h1> Animals: </h1>
            <List animalList = {animals} />
        </div>
    );
    
}