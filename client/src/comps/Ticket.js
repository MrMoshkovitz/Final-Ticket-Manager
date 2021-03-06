import React, { useState } from "react";
import "./Ticket.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LinearWithValueLabel from "./LinearWithValueLabel";

const Ticket = ({
	ticket,
	hideTicketsHandler,
	setTicketUnDone,
	setTicketDone,
	getDate,
	progress,
	setProgress,
}) => {
	const [seconds, setSeconds] = useState(5);
		// const [doShow, setDoShow] = useState(false)
		
    return (
    <div className="ticket">
			<h2 className="title">{JSON.stringify(ticket.title)}</h2>
			<div className="date">{getDate(ticket.creationTime).toString()}</div>
			<br />

			<div id={ticket.id} className="ticketContent">
				<br />
				{ticket.content}
			</div>
			<br />
			<div>
				{ticket.labels &&
					ticket.labels.map((label) => <div className="label">{label}</div>)}
			</div>
			<br />
			<button
				className="hideTicketButton"
				onClick={() => hideTicketsHandler(ticket)}
			>
				Hide
			</button>
			<Button
				className="changeTicketState"
				variant={ticket.done ? "success" : "danger"}
				onClick={
					ticket.done
						? () => setTicketUnDone(ticket)
						: () => setTicketDone(ticket)
				}
			>
				{" "}
				{ticket.done ? "Undone" : "done"}
			</Button>
			<LinearWithValueLabel
				className="timer"
				value={20}
				seconds={progress}
				setSeconds={setProgress}
			/>
		</div>
	);
};
export default Ticket;
