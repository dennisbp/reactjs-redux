import React from 'react';


const Card = ({name, email, id}) =>{
    // const {name, email} = props;
    return (
    <div className='bg-light-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
         <img alt= 'img' src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;
