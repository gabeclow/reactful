import React from "react";
import { Button } from "react-bootstrap";
import TeaserCard from "./teaser_card";
import cardData from "../mock_data/card_data"
import ClassTeaserCard from "../components/teaser_card_class"
import CheckListItem from "./check_list_class";
import wedNapkin from "../image_resources/napkin.jpg"

function buttonClicked() {
  alert("buttonclicked");
}

function HOMEPAGE() {

  const theCardData = cardData.map(data => <TeaserCard key={data.id} email={data.email} title={data.title} name={data.name}/>)

  return (
    <div>
      <img src={wedNapkin} alt="napkin" width="100" height="100" onMouseOver={buttonClicked}/>
      <CheckListItem />
      <p className="homeInfo">HomePage</p>
      <div>
        <Button variant="outline-primary" onClick={buttonClicked}>
          Primary
        </Button>
      </div>

      { theCardData/* <TeaserCard contact={{ name: "test", email: "email1", title: "title" }} />
      <TeaserCard contact={{ name: "asdf", title: "title2" }} /> */}
      <ClassTeaserCard />
    </div>
  );
}
export default HOMEPAGE;
