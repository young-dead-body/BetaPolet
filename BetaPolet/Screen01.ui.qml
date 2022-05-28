
/*
This is a UI file (.ui.qml) that is intended to be edited in Qt Design Studio only.
It is supposed to be strictly declarative and only uses a subset of QML. If you edit
this file manually, you might introduce QML code that is not supported by Qt Design Studio.
Check out https://doc.qt.io/qtcreator/creator-quick-ui-forms.html for details on .ui.qml files.
*/
import QtQuick
import QtQuick 2.0
import QtQuick.Controls
import QtCharts 2.15

import "script.js" as Script
import "Chart.js" as Chart

//импортируем код из файла Javascript, назовем этот код именем Script
Rectangle {
    id:mainScreen
    // @disable-check M222
    FontLoader: Chart.func(myChart)

    width: 1280
    height: 720

    color: Constants.backgroundColor

    Item {
        // @disable-check M221
        Timer {
            interval: 50
            running: true
            repeat: true
            //onTriggered: time.text = Date().toString()
            // @disable-check M222
            onTriggered: Script.run(frame)
        }

        Text {
            id: time
        }
    }

    Image {
        id: layer1
        x: 200
        y: 2
        width: 190
        height: 167
        source: "images/Layer 1.png"
        fillMode: Image.PreserveAspectFit

        Frame {
            id: frame
            x: 91
            y: 93
            width: 7
            height: 6
            rotation: -131.647

            Image {
                id: untitled2
                x: -11
                y: -82
                width: 30
                height: 92
                source: "images/Untitled-2.png"
                fillMode: Image.PreserveAspectFit
            }
        }
    }

    ListView {
        id: listView
        x: 8
        y: 6
        width: 110
        height: 160
        model: ListModel {
            ListElement {
                name: "Grey"
                colorCode: "grey"
            }

            ListElement {
                name: "Red"
                colorCode: "red"
            }

            ListElement {
                name: "Blue"
                colorCode: "blue"
            }

            ListElement {
                name: "Green"
                colorCode: "green"
            }
        }
        delegate: Item {
            x: 5
            width: 80
            height: 40
            Row {
                id: row1
                Rectangle {
                    width: 40
                    height: 40
                    color: colorCode
                }

                Text {
                    text: name
                    anchors.verticalCenter: parent.verticalCenter
                    font.bold: true
                }
                spacing: 10
            }
        }
    }

    Button {
        id: button
        x: 553
        y: 124
        text: qsTr("Button")
    }

    TextInput {
        id: textInput
        x: 111
        y: 203
        width: 80
        height: 20
        text: qsTr("Text Input")
        font.pixelSize: 12
    }

    /*ChartView {
        id: line
        x: 222
        y: 327
        width: 300
        height: 300
        LineSeries {
            name: "LineSeries"
            XYPoint {
                x: 0
                y: 2
            }

            XYPoint {
                x: 1
                y: 1.2
            }

            XYPoint {
                x: 2
                y: 3.3
            }

            XYPoint {
                x: 5
                y: 2.1
            }
        }
    }*/
}