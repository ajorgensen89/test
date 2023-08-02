import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";


export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 3000)
    }

    handleChange = (event) => {
        // Capture input and save name
        const name = event.target.value.toLowerCase();
        // Filter savedPosts and save in new const. Convert to lower case.
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        
        // Set state of posts to new const of filtered posts.
        this.setState({
            posts: filteredPosts
        })
    }


    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchinput'>Search</label>
                        <input type="search" id="searchinput" placeholder="By Author" onChange={this.handleChange} />
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>

                    {/* Part 1: Creating the map function */}

                        {/* {
                    savedPosts.map((post)=>{
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random"/>
                                <p>{post.description}</p>
                                </div>
                        })
                    } */}


                    {/* Part 2: Creating a child component */}
                    
                    {/* <PostItem savedPosts={savedPosts} />
                    <Loader /> */}
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                    {/* {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    } */}
                </div>
            </div>
        )
    }
}

export default Content