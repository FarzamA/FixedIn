# README

# ![FixedIn Logo](https://cdn.discordapp.com/attachments/896959094034948166/908732089216684052/logo.png)

Welcome to my LinkedIn clone! I used Ruby on Rails to build a RESTful API server for data transfer between a normalized PostgresSQL database and the frontend. This is a single page application built with React in order to utilize DOM manipulation and Redux for application state management. The images used within the app are stored in an AWS S3 bucket. The images are retrieved using ActiveStorage. Here's the [live site](https://fixedin.herokuapp.com/#/)

## Dependencies
- Ruby, Rials, React, Redux, Webpack, Babel
- Gems: bcrypt, jquery-rails, aws-sdk-s3, faker

## Dev Dependencies
- Gems: better_errors, binding_of_caller, pry-rails, annotate

# Features 
## Profile
![user info gif](https://fixedin-seeds.s3.amazonaws.com/ChangeProfileImgs.gif)
- Edit profile picture
- Edit header image
![user profile gif](https://fixedin-seeds.s3.amazonaws.com/ChangeUserDetails.gif)
- Update user details
![user experience gif](https://fixedin-seeds.s3.amazonaws.com/ChangeExp.gif)
- Update and create educations/experiences
## Feed
![user post gif](https://fixedin-seeds.s3.amazonaws.com/ChangePosts.gif)
- Create, edit and delete posts
![search bar gif](https://fixedin-seeds.s3.amazonaws.com/SearchAndConnect.gif)
- Search for users and form connections
![comments gif](https://fixedin-seeds.s3.amazonaws.com/Comments.gif)
- Create, edit and delete comments
## Connections
![connections list](https://fixedin-seeds.s3.amazonaws.com/Connections.gif)
- Ignore or accept connections from users

# Code Snippets
## Infinite Scroll 
```javascript
    this.observer = React.createRef();
    this.lastPostRef = node => {
        // intersection observer lets us register a callback whenever the node is in our viewport
        this.observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && this.state.morePosts) {
                // deal w loading bar later
                this.setState({ loading: true }, () => {

                    this.incrementOffset();
                        props.fetchPostsAPI(this.state.offset + 1).then(posts => {
                            props.dispatch(receivePosts(posts));

                            if (Object.values(posts.posts).length < 10) {
                                 this.setState({ morePosts: false })
                            };

                            this.setState({ loading: false });
                        });
                });
            };
        });

        if (node) this.observer.current.observe(node);
    }
```
## Search Results 
```ruby
def index 
    #what goes in the feed
    user_id = current_user.id
    rec_connections = Connection.where(connectee_id: user_id, accepted: true)
                                .pluck(:connector_id)
    
    sent_connections = Connection.where(connector_id: user_id, accepted: true)
                                    .pluck(:connectee_id)

    connected_users = rec_connections | sent_connections
    connected_users.push(user_id)

    @posts = Post.includes(:user)
                    .where(user_id: connected_users)
                    .order(created_at: :desc)
                    .offset(params[:offset].to_i * 10)
                    .limit(10)
end
```


# Future Direction 
- Likes as well as comments for posts
- Messaging other users
- Receive notifications from linked user's activities

