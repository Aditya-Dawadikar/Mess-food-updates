import React,{useState,useEffect} from 'react';
import { useParams} from "react-router-dom";
import { authAxiosMess } from "../App";
import {Col,ListGroup,Row,Image} from 'react-bootstrap';
//icons
import food1 from "../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";

const MessInfo = () => {
    const { messId } = useParams();

    const [mess, setMess] = useState({
        messName: "",
        address: "",
        menuList: [],
        subscribers: [],
      });


      useEffect(() => {
        authAxiosMess
        .get(`/api/mess/${messId}`)
        .then((res) => {
          console.log(res.data.Mess[0].subscribers);
          setMess({
            messName: res.data.Mess[0].messDetails.messName,
            menuList: res.data.Mess[0].MenuList,
            address: res.data.Mess[0].messDetails.address,
            subscribers: res.data.Mess[0].subscribers,
          });
        })
        .catch((err) => console.log(err));
    }, [messId]);

    return(
        <Row style={{marginBottom:"2rem"}}>
            <Col md={5}>
                <Image src={food1} alt='foodimage' fluid />
            </Col>
            <Col md={6}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3 style={{color:"#FFB800"}}>{mess.messName}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <GradeRoundedIcon style={{ transform: "scale(1.5)" }} />
                    <GradeRoundedIcon
                    style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                    />
                    <GradeRoundedIcon
                    style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                    />
                    <GradeRoundedIcon
                    style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                    />
                </ListGroup.Item>

                <ListGroup.Item>
                    Chinese,FastFoood,North Asia Food...
                </ListGroup.Item>

                <ListGroup.Item>
                    {mess.address}
                </ListGroup.Item>
                </ListGroup>
            </Col>
      </Row>
    )
}

export default MessInfo;

//1.useParams. This hook gives us access to the params of that particular route. params are parameters whose values are set dynamically in a URL. Usually, the way we access the params in previous versions of react-router was through the match props passed to the component.