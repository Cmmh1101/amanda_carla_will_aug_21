import React from 'react';


export const Streak = (props) => {
    if (props.streak >= 3) {
        return (
            <>{props.streak}</>
        )
    } else {
        return (
        <></>
        )}
}

// export default Streak;