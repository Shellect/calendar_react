import React from "react";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="calendar-grid">
                <h6>{this.props.month}, {this.props.year}</h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Пн.</th>
                            <th>Вт.</th>
                            <th>Ср.</th>
                            <th>Чт.</th>
                            <th>Пт.</th>
                            <th>Сб.</th>
                            <th>Вс.</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}