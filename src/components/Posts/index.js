import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { api } from "../../utils/handler";
import {
  PostContainer,
  PostTitle,
  PostBody,
  ReadMore,
  PostPageContainer,
} from "./posts.elements";
import { Default } from "react-awesome-spinners";

export default class index extends Component {
  state = {
    posts: [],
  };

  fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const result = await api("get", {}, url);

    // we are using setTimeout here so that we can see loader
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat(result.data),
      });
    }, 1500);
  };

  componentDidMount() {
    this.fetchPosts();
  }
  render() {
    const { posts } = this.state;

    return (
      <PostPageContainer>
        <InfiniteScroll
          dataLength={this.state.posts.length}
          next={this.fetchPosts}
          hasMore={true}
          loader={<Default color="#f35742" />}
        >
          {posts &&
            posts.map((post, index) => (
              <PostContainer key={index}>
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body}</PostBody>
                <ReadMore margin="2px 2px 2px auto">Read more</ReadMore>
              </PostContainer>
            ))}
        </InfiniteScroll>
      </PostPageContainer>
    );
  }
}
