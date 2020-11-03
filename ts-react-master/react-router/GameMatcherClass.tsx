import * as React from 'react';
import { Component } from 'react';
import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import { RouteChildrenProps } from 'react-router-dom';

class GameMatcher extends Component<RouteChildrenProps<{ name: string }>> {
    render() {
        if (!this.props.match) {
            return (
                <div>
                    일치하는 게임이 없습니다.
                </div>
            );
        }
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('page'));
        if (this.props.match.params.name === 'number-baseball') {
            return <NumberBaseball />
        }else {
            return (
                <div>
                    일치하는 게임이 없습니다.
                </div>
            );
        }
    }
}

export default GameMatcher;
