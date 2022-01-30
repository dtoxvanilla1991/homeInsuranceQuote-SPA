const QuoteCard = ({data}) => {
    const userData = data[0];
    const date = new Date(userData.startDate);

    return (
        <div>
            <h3>Hey {userData.firstName},</h3>
                <p>Here is your quote for {userData.address1}, {userData.address2} </p>
                <p>Quote reference: {userData.quoteRef}</p>
                <p>Your cover starts on {date.toString().substring(0,16)}</p>
        </div>
    )
}

export default QuoteCard;
