import React from 'react'


class App extends React.Component {
    
    

    state = {
            favArtist : [
                {
                    
                    id: 1,
                    name: 'Calum Scott',
                    music_type: 'Pop',
                    intro_para: 'Calum Scott (born 12 October 1988) is an English singer and songwriter.', 
                    songTitle: 'You Are the Reason',
                    releaseDate: '17 November 2017', 
                    cover_art: '', 
                    likeCounts: 0
                },
                { 
                    id: 2,
                    name: 'Ed Sheeran',
                    music_type: 'Pop/Folk/Hip Hop',
                    intro_para: 'Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer, songwriter, record producer, and actor', 
                    songTitle: 'Perfect',
                    releaseDate: '26 September 2017', 
                    cover_art: '', 
                    likeCounts: 0
                },
                { 
                    id: 3,
                    name: 'Beyoncé',
                    music_type: 'R&B/Pop/Hip Hop',
                    intro_para: 'Beyoncé Giselle Knowles-Carter (born September 4, 1981) is an American singer, songwriter, record producer, dancer, actress and filmmaker. Born and raised in Houston, Texas.', 
                    songTitle: 'Halo',
                    releaseDate: 'January 20, 2009', 
                    cover_art: '', 
                    likeCounts: 0

                }
              ]
    };

    handleClick = () => this.setState(prevState => ({ likeCounts: prevState.likeCounts++}));
    
    render() {
        const renderArtist = this.state.favArtist.map(st => <li key={st.id} >{st.name}, {st.music_type}, {st.intro_para}</li>)
    
    const renderSongs = this.state.favArtist.map(st => <div key={st.name}><li >{st.songTitle}, {st.releaseDate}</li><p>There have been {this.state.favArtist.likeCounts} likes(s)!</p><button onClick={this.handleClick}>Like</button></div>)
         

      return (
        <main>
            
            

            <h2>Artist Name</h2>
            <ul>
                
                 {renderArtist}
                
            </ul>
            

            <h2>favourite Song</h2>
            
            <ul>

                {renderSongs}
                
            </ul>

        </main>

      )
    }
}


export default App