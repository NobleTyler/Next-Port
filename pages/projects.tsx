import React from 'react'
import Layout,{siteTitle} from '../components/layout'
import Head from 'next/head'
import {Grid,Image,Card,Icon} from 'semantic-ui-react'
import {GetStaticPaths, GetStaticProps} from 'next'


const Projects = ({allProjectsData}:{
    allProjectsData:{
        pic: string
        title : string
        id : string
        about:string
        date:string
    }[]
}) => {

const chunkSize = 3

//Break array into sub array chunks for better displaying
const chunkify =  (array :any[]): any[] =>  {
    array.reduce((resultArray:any[],item:any,index:number)=>{
        const chunkIndex:number = Math.floor(index/chunkSize)

        if(!resultArray[chunkIndex]){
            resultArray[chunkIndex] = [] //new chunks
        }
        resultArray[chunkIndex].push(item)

        return resultArray
    },[])
    
    return[]
}

    return (
        <Layout>
            <Head><title>{siteTitle}</title></Head>
 <Grid stackable columns={chunkSize} divided>
    <Grid.Row>
        <Grid.Column>
           <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
        <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
    
{chunkify(allProjectsData).map(({id,date,title,pic,about})=>(
    <Grid.Row>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>
            
        </Grid.Column>
    </Grid.Row>
))}

  </Grid>


        </Layout>
    )
}

export default Projects