import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {
                  title: 'hats',
                  imageUrl: 'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 1
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 2
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 3
                },
                {
                  title: 'womens',
                  imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  size: 'large',
                  id: 4
                },
                {
                  title: 'mens',
                  imageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                  size: 'large',
                  id: 5
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>  
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}
export default Directory;