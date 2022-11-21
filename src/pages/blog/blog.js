import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layout";
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [iserror, setIsError] = useState('');

    //const getPosts = () => {
    //  fetch('https://jsonplaceholder.typicode.com/posts')
    //    .then((response) => { return response.json() })
    //  .then((jsonResponse) => { return setPosts(jsonResponse) });
    //}

    const getPosts = async () => {
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/pots');
            setPosts(posts.data)
        } catch (error) {
            setIsError(error.message);
        }
    }
    useEffect(() => {
        getPosts();
    }, []);

    const PostList = () =>
        posts.map((post, index) => {
            return (
                <div className="col-lg-6 col-md-6 mb-5">
                    <div className="blog-item">
                        <img src="images/blog/1.jpg" alt="" className="img-fluid rounded" />
                        <div className="blog-item-content bg-white p-5">

                            <h3 className="mt-3 mb-3">
                                <Link to={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h3>

                            <Link
                                to={`/blog/${post.id}`}
                                className="btn btn-small btn-main btn-round-full"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>);
        })
    return (
        <Layout>
            <section className="page-title bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our blog</span>
                                <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="index.html" className="text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="text-white">/</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white-50">
                                            Our blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section blog-wrap bg-gray">
                <div className="container">
                    <div className="row">
                        {
                            iserror === '' ? <PostList /> : iserror
                        }
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 text-center">
                            <nav className="navigation pagination d-inline-block">
                                <div className="nav-links">
                                    <a className="prev page-numbers" href="#">
                                        Prev
                                    </a>
                                    <span aria-current="page" className="page-numbers current">
                                        1
                                    </span>
                                    <a className="page-numbers" href="#">
                                        2
                                    </a>
                                    <a className="next page-numbers" href="#">
                                        Next
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Blog;