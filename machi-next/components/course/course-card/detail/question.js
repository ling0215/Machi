import React from "react";

export default function CommentForm() {
    return (
        <div className="container">
            <form className="add-comment-form mt-4 mb-4">
                <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input className="form-control" name="nickname" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Please leave your message here</label>
                    <textarea name="content" className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="comments"></div>
        </div>
    );
}