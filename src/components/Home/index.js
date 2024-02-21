import {Component} from 'react'
import './index.css'
import {
  HomeContainer,
  HeaderContainer,
  HeaderUnOrderList,
  HeaderList,
  ScoreContainer,
  ScoreText,
  Score,
  GameContainer,
  GameButton,
  BottomContainer,
  ResultsContainer,
  SingleChoiceContainer,
  YouOpponent,
  FinalContainer,
  Result,
  PlayAgain,
} from './style'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {score: 0, chosenOption: '', isSelected: false}

  render() {
    const {score, chosenOption, isSelected} = this.state
    return (
      <HomeContainer>
        <HeaderContainer>
          <HeaderUnOrderList>
            <HeaderList>ROCK</HeaderList>
            <HeaderList>PAPER</HeaderList>
            <HeaderList>SCISSORS</HeaderList>
          </HeaderUnOrderList>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </HeaderContainer>
        <GameContainer>
          <GameButton>
            {' '}
            <img src={choicesList[0].imageUrl} alt="ROCK" className="image" />
          </GameButton>
          <GameButton>
            {' '}
            <img
              src={choicesList[1].imageUrl}
              alt="SCISSORS"
              className="image"
            />
          </GameButton>
          <GameButton>
            {' '}
            <img src={choicesList[2].imageUrl} alt="PAPER" className="image" />
          </GameButton>
        </GameContainer>
        <BottomContainer>
          <ResultsContainer>
            <SingleChoiceContainer>
              <YouOpponent>YOU</YouOpponent>
              <img src={choicesList[0].imageUrl} alt="ROCK" className="image" />
            </SingleChoiceContainer>
            <SingleChoiceContainer>
              <YouOpponent>OPPONENT</YouOpponent>
              <img
                src={choicesList[1].imageUrl}
                alt="SCISSORS"
                className="image"
              />
            </SingleChoiceContainer>
          </ResultsContainer>
          <FinalContainer>
            <Result>IT IS DRAW</Result>
            <PlayAgain>PLAY AGAIN</PlayAgain>
          </FinalContainer>
        </BottomContainer>
      </HomeContainer>
    )
  }
}
export default Home
