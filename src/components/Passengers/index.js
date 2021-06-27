import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Default } from "react-awesome-spinners";
import {
  PassengersContainer,
  PassengerCard,
  PassengerName,
  AirlineLogo,
  AirlineName,
  Div,
  AirlineCountry,
  Headquater,
  EndMessage,
} from "./passengers.elements";
import { api } from "../../utils/handler";
import { Bold } from "..";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      passengers: [],
      pages: null,
      current_page: 0,
      result_per_page: 10,
      has_more: true,
    };
  }

  fetchPassengers = async () => {
    const { result_per_page, pages, current_page } = this.state;

    pages === current_page && this.setState({ has_more: false });

    const url = `https://api.instantwebtools.net/v1/passenger?page=${current_page}&size=${result_per_page}`;
    const result = await api("get", {}, url);

    // we are using setTimeout here so that we can see loader
    setTimeout(() => {
      this.setState({
        passengers: this.state.passengers.concat(result.data.data),
        pages: result.data.totalPages,
        current_page: current_page + 1,
      });
    }, 1500);
  };

  componentDidMount() {
    this.fetchPassengers();
  }

  render() {
    const { passengers, has_more } = this.state;

    return (
      <PassengersContainer>
        <InfiniteScroll
          dataLength={this.state.passengers.length}
          next={this.fetchPassengers}
          hasMore={has_more}
          loader={<Default color="#f35742" />}
          endMessage={<EndMessage>No more data available !</EndMessage>}
        >
          {passengers &&
            passengers.map((passenger, index) => (
              <PassengerCard key={index}>
                <PassengerName>
                  <Bold>Passenger Name:</Bold> {passenger.name}
                </PassengerName>
                <Div display="true">
                  <AirlineLogo
                    src={
                      passenger.airline.logo === undefined
                        ? passenger.airline[0].logo
                        : passenger.airline.logo
                    }
                    alt={
                      passenger.airline.name === undefined
                        ? passenger.airline[0].name
                        : passenger.airline.name
                    }
                  />
                  <AirlineName>
                    <Bold>Airline name: </Bold>
                    {passenger.airline.name === undefined
                      ? passenger.airline[0].name
                      : passenger.airline.name}
                  </AirlineName>
                  <AirlineCountry>
                    <Bold> Country:</Bold>{" "}
                    {passenger.airline.country === undefined
                      ? passenger.airline[0].country
                      : passenger.airline.country}
                  </AirlineCountry>
                </Div>
                <Headquater>
                  <Bold> Headquaters:</Bold>{" "}
                  {passenger.airline.head_quaters === undefined
                    ? passenger.airline[0].head_quaters
                    : passenger.airline.head_quaters}
                </Headquater>
              </PassengerCard>
            ))}
        </InfiniteScroll>
      </PassengersContainer>
    );
  }
}
