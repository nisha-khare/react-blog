import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../layout";
const SingleBlog = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then(responsejson => setPost(responsejson));
    }
    useEffect(() => {
        getPost();
    }, []);
    return (
        <Layout>

            <section className="page-title bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">News details</span>
                                <h1 className="text-capitalize mb-4 text-lg">Blog Single</h1>
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
                                            News details
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
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12 mb-5">
                                    <div className="single-blog-item">
                                        <div className="blog-item-content bg-white p-5">
                                            <h2 className="mt-3 mb-4">
                                                {post.title}
                                            </h2>
                                            <p className="lead mb-4">
                                                {post.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-5">
                                    <div className="posts-nav bg-white p-5 d-lg-flex d-md-flex justify-content-between ">
                                        <a className="post-prev align-items-center" href="#">
                                            <div className="posts-prev-item mb-4 mb-lg-0">
                                                <span className="nav-posts-desc text-color">
                                                    - Previous Post
                                                </span>
                                                <h6 className="nav-posts-title mt-1">
                                                    Donec consectetuer ligula <br />
                                                    vulputate sem tristique.
                                                </h6>
                                            </div>
                                        </a>
                                        <div className="border" />
                                        <a className="posts-next" href="#">
                                            <div className="posts-next-item pt-4 pt-lg-0">
                                                <span className="nav-posts-desc text-lg-right text-md-right text-color d-block">
                                                    - Next Post
                                                </span>
                                                <h6 className="nav-posts-title mt-1">
                                                    Ut aliquam sollicitudin leo.
                                                </h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
export default SingleBlog;