
    const person1 = {
    name: "George",
    favoriteThings: {
        food : "Tacos",
        book : "Flowers for Algernon",
        anime: "One Piece"
    
    }};
    
function DisplayProfile() {
    return (
        <>
        <h1>Player Name: {person1.name}</h1>
        <h3>Player's Favorite Food: {person1.food}</h3>
        </>
    )
}

export default DisplayProfile;