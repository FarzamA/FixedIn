# README

# ![FixedIn Logo](https://cdn.discordapp.com/attachments/896959094034948166/908732089216684052/logo.png)

Welcome to my LinkedIn clone! I used Ruby on Rails to build a RESTful API server for data transfer between a normalized PostgresSQL database and the frontend. This is a single page application built with React in order to utilize DOM manipulation and Redux for application state management. The images used within the app are stored in an AWS S3 bucket. The images are retrieved using ActiveStorage. Here's the [live site](https://fixedin.herokuapp.com/#/)

## Dependencies
- Ruby, Rials, React, Redux, Webpack, Babel
- Gems: bcrypt, jquery-rails, aws-sdk-s3, faker

## Dev Dependencies
- Gems: better_errors, binding_of_caller, pry-rails, annotate

# Features 
## Update profile with an avatar, background image and personal information
![user info screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908726971545055232/Screenshot_144.png)
## Update education & experience information
![user experience screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908727072971685968/Screenshot_144.png)
## Make and edit posts to FixedIn
![user post screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908727425163223080/Screenshot_145.png)\
![edit post screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908727764297875506/Screenshot_146.png)\
![edit post screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908727950101319700/Screenshot_147.png)\
## Search and connect with other users
![search bar screenshot](https://cdn.discordapp.com/attachments/896959094034948166/908728335511744542/Screenshot_148.png)
## View list of linked users
![connections list](https://cdn.discordapp.com/attachments/896959094034948166/908728871732539392/Screenshot_149.png)

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

