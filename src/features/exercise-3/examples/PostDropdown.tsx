import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Post } from "../model/Post";
import { useGetPosts } from "../api/useGetPosts";
import { TProps } from "../utils/type";
import Wrapper from "./Wrapper";

const PostDropdown = (props: TProps) => {
  const { renderSelectedItem } = props;

  const { data: posts } = useGetPosts();

  const [selectedPost, setSelectedPost] = useState<Post>();

  const handleChangePost = (value: Post) => {
    setSelectedPost(value);
  };

  return (
    <Wrapper
      title="Post list"
      renderSelectedItem={renderSelectedItem}
      selectedItem={selectedPost}
      itemSelectedType="post"
    >
      <SearchBar
        options={posts}
        labelFilterKey="title"
        valueChange={handleChangePost}
      />
    </Wrapper>
  );
};

export default PostDropdown;
