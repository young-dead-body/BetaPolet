import QtQuick 2.4
import QtQuick.Window 2.15
import QtCharts 2.15
import QtQuick.Controls

import "script.js" as Script

Window {
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")

    Item {
        Timer {
            interval: 50
            running: true
            repeat: true
            //onTriggered: time.text = Date().toString()
            onTriggered: Script.run(frame, myCanvas)

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

    Canvas{
        id:myCanvas;
        x:200
        y:200
        width: 400;
        height: 400;
    }

/*
    ChartView{
        id: line
        x: -14
        y: 517
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
    /*Screen01 {
            id: mainScreen
        }*/


}
