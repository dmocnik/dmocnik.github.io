# IGVC Robot 🤖

## Overview

### Created For

[Robotics Association at Oakland University!](https://oaklandrobotics.org/)

### Description

Our main project in the Robotics Association is the robot we build for the [Intelligent Ground Vehicle Competition](http://www.igvc.org/) each year.
The objective there is for your robot to autonomously complete an obstacle course, where it has to do tasks like stay within some lane lines, avoid obstacles, and navigate to GPS waypoints.
As the Software Lead, my task was to create the entire software stack that allows the robot to be able to perceive its environment and run the IGVC course.
[Horizon, our robot for 2024](http://www.igvc.org/design/2024/10.pdf), was equipped with a [Stereolabs ZED 2i Depth Camera](https://www.stereolabs.com/products/zed-2) and a [SparkFun GPS-RTK module kit](https://www.sparkfun.com/products/23452).

<Image src='../assets/projects/igvc_0.png' caption='Horizon!'/>

Horizon's software runs on an [Nvidia Jetson Orin Nano](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/), with ROS 2 Humble Hawksbill on Ubuntu.
I primarily used [Nav2](https://nav2.org/) to handle the mapping, path planning, and localization.
I also wrote an OpenCV script to allow the robot to be able to find the lane lines on the course and add them to the maps.
Finally, I wrote a few ROS2 nodes to facilitate the communication between the Jetson and the robot's electrical system via our CAN network.

### Source Code

[Take a look at the source code on GitHub.](https://github.com/oaklandrobotics/ros_ora24)

## Screenshots and More

*Click to enlarge.*

<Image src='../assets/projects/igvc_1.png' caption='Lane line detection with OpenCV'/>

<Image src='../assets/projects/igvc_2.png' caption='Mapping and path planning with Nav2'/>

<p>
    <video controls>
        <source src="/assets/projects/gazebo.webm" type="video/webm">
    </video>
    <center style="margin-top: 4px;">
        <em>Simulated IGVC course in Gazebo</em>
    </center>
</p>

<Image src='../assets/projects/pov.gif' caption="POV: You're the robot"/>