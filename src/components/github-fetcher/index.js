import React, {Component} from 'react'
import Spinner from '../spinner'

import './github-fetcher.css'

class GithubFetcher extends Component{
  state = {
    githubData: [],
    error: false
  };

  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`)
        }

        return res.json()
      })
      .then(data => this.setState({
        githubData: data.items
      }))
      .catch(err => {
        this.setState({
          error: true
        });

        console.error(err)
      })
  }

  render() {
    const popularJsReps = this.state.githubData.map(entry => (
      <li key={entry.id}><a href={entry['html_url']}>{entry.name}</a></li>
    ));

    if (this.state.error) {
      return (
        <h2>Что-то пошло не так, вернитесь позднее</h2>
      )
    }

    if (!this.state.githubData.length) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      )
    }

    return (
      <div className="popular">
        <h2>Популярные JavaScript репозитории на GitHub</h2>
        <ol>{popularJsReps}</ol>
      </div>
    );
  }
}

export default GithubFetcher
