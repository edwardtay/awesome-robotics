# Awesome Robotics [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of robotics frameworks, simulators, tools, and platforms for building intelligent robots. 170+ tools across 23 categories.

If you find this useful, please star the repo — it helps others discover it!

> ⚠️ = aging (6-12 months since last commit) — may still work but watch for staleness.

## How to Choose

| I need to... | Start here |
|---|---|
| Build a robot application with ROS | [ROS / ROS 2 Ecosystem](#-ros--ros-2-ecosystem) |
| Simulate robots before deploying | [Simulation & Physics Engines](#-simulation--physics-engines) |
| Plan robot motion and paths | [Motion Planning & Navigation](#-motion-planning--navigation) |
| Do visual perception on a robot | [Computer Vision & Perception](#-computer-vision--perception) |
| Build a self-driving vehicle | [Autonomous Vehicles](#-autonomous-vehicles) |
| Map environments with SLAM | [SLAM & Localization](#-slam--localization) |
| Train robots with RL / learning | [Robot Learning & RL](#-robot-learning--rl) |
| Pick and place objects | [Manipulation & Grasping](#-manipulation--grasping) |
| Fly drones autonomously | [Drones & UAVs](#-drones--uavs) |
| Control robot arms / actuators | [Robot Control & Dynamics](#-robot-control--dynamics) |
| Use AI/LLMs to command robots | [Foundation Models for Robotics](#-foundation-models-for-robotics) |
| Teleoperate a robot remotely | [Teleoperation & Digital Twins](#-teleoperation--digital-twins) |
| Coordinate multiple robots | [Multi-Robot & Swarm Systems](#-multi-robot--swarm-systems) |
| Use cloud sim/compute for robots | [Cloud Robotics Platforms](#-cloud-robotics-platforms) |

## Contents

- [🤖 ROS / ROS 2 Ecosystem](#-ros--ros-2-ecosystem)
- [🎮 Simulation & Physics Engines](#-simulation--physics-engines)
- [🧭 Motion Planning & Navigation](#-motion-planning--navigation)
- [👁️ Computer Vision & Perception](#️-computer-vision--perception)
- [🚗 Autonomous Vehicles](#-autonomous-vehicles)
- [🗺️ SLAM & Localization](#️-slam--localization)
- [🧠 Robot Learning & RL](#-robot-learning--rl)
- [🦾 Manipulation & Grasping](#-manipulation--grasping)
- [🚁 Drones & UAVs](#-drones--uavs)
- [🦿 Humanoid & Legged Robots](#-humanoid--legged-robots)
- [⚙️ Robot Control & Dynamics](#️-robot-control--dynamics)
- [🧩 Foundation Models for Robotics](#-foundation-models-for-robotics)
- [📡 Robot Communication & Middleware](#-robot-communication--middleware)
- [🔧 Robot Description & URDF](#-robot-description--urdf)
- [🛡️ Safety & Testing](#️-safety--testing)
- [🏗️ Hardware Platforms & Kits](#️-hardware-platforms--kits)
- [📐 Kinematics & Calibration](#-kinematics--calibration)
- [🗣️ Human-Robot Interaction](#️-human-robot-interaction)
- [🕹️ Teleoperation & Digital Twins](#️-teleoperation--digital-twins)
- [🐝 Multi-Robot & Swarm Systems](#-multi-robot--swarm-systems)
- [☁️ Cloud Robotics Platforms](#️-cloud-robotics-platforms)
- [📦 Datasets & Benchmarks](#-datasets--benchmarks)
- [🆓 Try Free](#-try-free)
- [🪦 Deprecated Tools Graveyard](#-deprecated-tools-graveyard)
- [Contributing](#contributing)

---

## 🤖 ROS / ROS 2 Ecosystem

The Robot Operating System — the de facto middleware for robotics. ROS 2 is the production-ready successor with real-time support, DDS communication, and better security.

| Tool | Stars | Description |
|------|-------|-------------|
| [ROS 2](https://github.com/ros2/ros2) | 4k | Next-gen robot middleware with real-time support, DDS, and multi-platform |
| [Navigation2](https://github.com/ros-navigation/navigation2) | 3k | ROS 2 navigation framework — path planning, obstacle avoidance, behavior trees |
| [MoveIt 2](https://github.com/moveit/moveit2) | 3k | Motion planning framework for robotic arms in ROS 2 |
| [micro-ROS](https://github.com/micro-ROS/micro_ros_setup) | 1k | ROS 2 on microcontrollers (ESP32, STM32) for embedded robotics |
| [ros2_control](https://github.com/ros-controls/ros2_control) | 1k | Hardware abstraction and real-time control framework for ROS 2 |
| [Autoware](https://github.com/autowarefoundation/autoware) | 9k | Full-stack autonomous driving built on ROS 2 |
| [ROS Bridge](https://github.com/RobotWebTools/rosbridge_suite) | 1k | WebSocket bridge for ROS — connect web/mobile apps to robots |
| [Foxglove](https://github.com/foxglove/studio) | 2k | Modern robotics observability and visualization platform for ROS |

## 🎮 Simulation & Physics Engines

Test robots in virtual worlds before deploying to hardware. Simulation-to-real (sim2real) transfer is a core robotics workflow.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Gazebo](https://github.com/gazebosim/gz-sim) | 1k | C++ | The standard ROS simulator with accurate physics and sensor models |
| [NVIDIA Isaac Sim](https://github.com/isaac-sim) | - | Python | GPU-accelerated sim with photorealistic rendering and synthetic data gen |
| [MuJoCo](https://github.com/google-deepmind/mujoco) | 8k | C | DeepMind's physics engine — fast, accurate, the standard for robot RL |
| [PyBullet](https://github.com/bulletphysics/bullet3) | 13k | C++/Python | Real-time physics engine with Python bindings, widely used in RL |
| [Drake](https://github.com/RobotLocomotion/drake) | 3k | C++/Python | MIT's model-based design toolkit for planning, control, and analysis |
| [SAPIEN](https://github.com/haosulab/SAPIEN) | 1k | Python | Interactive simulation for robotic manipulation and articulated objects |
| [Webots](https://github.com/cyberbotics/webots) | 3k | C++ | Open-source robot simulator with realistic physics and 3D rendering |
| [CoppeliaSim](https://github.com/CoppeliaRobotics/CoppeliaSimLib) | 1k | C++ | Versatile robot simulator (formerly V-REP) with remote API support |
| [Genesis](https://github.com/Genesis-Embodied-AI/Genesis) | 24k | Python | Generative physics platform for robotics and embodied AI research |
| [Isaac Lab](https://github.com/isaac-sim/IsaacLab) | 3k | Python | NVIDIA's lightweight framework for robot learning built on Isaac Sim |
| [ManiSkill](https://github.com/haosulab/ManiSkill) | 1k | Python | GPU-parallelized manipulation benchmark built on SAPIEN |
| [Robosuite](https://github.com/ARISE-Initiative/robosuite) | 2k | Python | Standardized benchmark for robot manipulation with MuJoCo backend |

## 🧭 Motion Planning & Navigation

Plan collision-free paths and navigate robots through complex environments.

> Also see: [MoveIt 2](#-ros--ros-2-ecosystem) and [Navigation2](#-ros--ros-2-ecosystem) in the ROS 2 section.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OMPL](https://github.com/ompl/ompl) | 1k | C++ | Open Motion Planning Library — sampling-based planners (RRT, PRM, etc.) |
| [CuRobo](https://github.com/NVlabs/curobo) | 1k | Python | NVIDIA's CUDA-accelerated motion planning (1000x faster than OMPL) |
| [Open3D](https://github.com/isl-org/Open3D) | 12k | C++/Python | 3D data processing library — point clouds, meshes, RGBD integration |
| [Moveit Pro](https://github.com/PickNikRobotics/moveit_studio) | 200 | C++ | Commercial MoveIt wrapper with behavior trees and web UI |

## 👁️ Computer Vision & Perception

See the world through robot eyes — object detection, depth estimation, 3D reconstruction.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OpenCV](https://github.com/opencv/opencv) | 80k | C++/Python | The foundational computer vision library — everything starts here |
| [Open3D](https://github.com/isl-org/Open3D) | 12k | C++/Python | 3D point cloud processing, RGBD integration, and visualization |
| [PCL](https://github.com/PointCloudLibrary/pcl) | 10k | C++ | Point Cloud Library — filtering, segmentation, registration, surface reconstruction |
| [DepthAnything](https://github.com/DepthAnything/Depth-Anything-V2) | 4k | Python | State-of-the-art monocular depth estimation for any image |
| [Grounded SAM](https://github.com/IDEA-Research/Grounded-SAM-2) | 5k | Python | Open-set object detection + segmentation for robotic perception |
| [YOLOv8/11](https://github.com/ultralytics/ultralytics) | 38k | Python | Real-time object detection, segmentation, and pose estimation |
| [FoundationPose](https://github.com/NVlabs/FoundationPose) | 2k | Python | NVIDIA's 6DoF pose estimation for novel objects without CAD models |
| [Segment Anything](https://github.com/facebookresearch/segment-anything) | 50k | Python | Meta's zero-shot segmentation model — segment any object in any image |
| [ZED SDK](https://github.com/stereolabs/zed-sdk) | 1k | C++/Python | Stereo camera SDK for depth, tracking, and spatial mapping |

## 🚗 Autonomous Vehicles

Full-stack self-driving and ADAS development platforms.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Autoware](https://github.com/autowarefoundation/autoware) | 9k | C++ | Full-stack open-source autonomous driving on ROS 2 |
| [Apollo](https://github.com/ApolloAuto/apollo) | 26k | C++ | Baidu's production-grade autonomous driving platform |
| [CARLA](https://github.com/carla-simulator/carla) | 11k | C++ | Open-source simulator for autonomous driving research |
| [openpilot](https://github.com/commaai/openpilot) | 51k | Python | comma.ai's open-source driver assistance system for 275+ car models |
| [Lanelet2](https://github.com/fzi-forschungszentrum-informatik/Lanelet2) | 1k | C++ | HD map framework for autonomous driving |

## 🗺️ SLAM & Localization

Build maps and figure out where the robot is — the fundamental challenge of mobile robotics.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3) | 7k | C++ | Visual/visual-inertial/multi-map SLAM system (monocular, stereo, RGBD) |
| [RTAB-Map](https://github.com/introlab/rtabmap) | 3k | C++ | RGB-D, Stereo, and LiDAR SLAM with real-time loop closure |
| [LIO-SAM](https://github.com/TixiaoShan/LIO-SAM) | 4k | C++ | Tightly-coupled lidar inertial odometry via smoothing and mapping |
| [FAST-LIO2](https://github.com/hku-mars/FAST_LIO) | 3k | C++ | Fast and robust direct LiDAR-inertial odometry from HKU |
| [Cartographer](https://github.com/cartographer-project/cartographer) | 7k | C++ | Google's real-time 2D and 3D SLAM library ⚠️ |
| [KISS-ICP](https://github.com/PRBonn/kiss-icp) | 2k | C++/Python | Keep It Small and Simple LiDAR odometry — minimal, robust, fast |
| [OpenVSLAM](https://github.com/stella-cv/stella_vslam) | 2k | C++ | Versatile visual SLAM framework supporting any camera model |
| [GTSAM](https://github.com/borglab/gtsam) | 3k | C++ | Georgia Tech's factor graph optimization library for SLAM and SFM |
| [Nerfstudio](https://github.com/nerfstudio-project/nerfstudio) | 10k | Python | NeRF-based 3D reconstruction — emerging for robot scene understanding |
| [3D Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) | 15k | Python/CUDA | Real-time radiance field rendering — next-gen mapping for robotics |

## 🧠 Robot Learning & RL

Teach robots skills through reinforcement learning, imitation learning, and simulation.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) | 7k | Python | Standard API for RL environments (successor to OpenAI Gym) |
| [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) | 9k | Python | Reliable RL algorithm implementations (PPO, SAC, TD3, etc.) |
| [Isaac Lab](https://github.com/isaac-sim/IsaacLab) | 3k | Python | NVIDIA's framework for sim-to-real robot learning at GPU scale |
| [LeRobot](https://github.com/huggingface/lerobot) | 8k | Python | Hugging Face's platform for real-world robot learning with shared datasets |
| [robomimic](https://github.com/ARISE-Initiative/robomimic) | 1k | Python | Imitation learning algorithms for robot manipulation |
| [ManiSkill](https://github.com/haosulab/ManiSkill) | 1k | Python | GPU-parallelized robotic manipulation benchmark with diverse tasks |
| [rl_games](https://github.com/Denys88/rl_games) | 1k | Python | High-performance RL framework designed for GPU sim environments |
| [Robosuite](https://github.com/ARISE-Initiative/robosuite) | 2k | Python | Modular simulation benchmark for robot manipulation research |
| [DROID](https://github.com/droid-dataset/droid) | 1k | Python | Large-scale in-the-wild robot manipulation dataset (76k demonstrations) |

## 🦾 Manipulation & Grasping

Pick things up. Put them down. The core challenge of robot manipulation.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [MoveIt 2](https://github.com/moveit/moveit2) | 3k | C++ | The standard ROS 2 manipulation planning framework |
| [GraspNet](https://github.com/graspnet/graspnet-baseline) | 1k | Python | 6-DoF grasp detection on point clouds — the grasp planning benchmark |
| [AnyGrasp](https://github.com/graspnet/anygrasp_sdk) | 1k | Python | Robust grasp detection that works on any object in dense clutter |
| [Contact-GraspNet](https://github.com/NVlabs/contact_graspnet) | 1k | Python | NVIDIA's 6-DoF grasp generation conditioned on local contact regions |
| [CuRobo](https://github.com/NVlabs/curobo) | 1k | Python | GPU-accelerated motion generation for manipulation |
| [Dex-Net](https://github.com/BerkeleyAutomation/dex-net) | 1k | Python | Deep learning grasp quality prediction for bin-picking |

## 🚁 Drones & UAVs

Autonomous flight, from hobby quadcopters to commercial UAV operations.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [PX4](https://github.com/PX4/PX4-Autopilot) | 9k | C++ | Production-grade flight controller for drones and VTOL aircraft |
| [ArduPilot](https://github.com/ArduPilot/ardupilot) | 12k | C++ | The most versatile open-source autopilot — planes, copters, rovers, subs |
| [MAVROS](https://github.com/mavlink/mavros) | 1k | C++ | MAVLink communication driver for ROS — connect to PX4/ArduPilot |
| [QGroundControl](https://github.com/mavlink/qgroundcontrol) | 3k | C++ | Cross-platform ground control station for MAVLink drones |
| [MAVLink](https://github.com/mavlink/mavlink) | 3k | C | Lightweight messaging protocol for communicating with drones |
| [Aerostack2](https://github.com/aerostack2/aerostack2) | 200 | C++ | ROS 2 framework for autonomous aerial robot development |

## 🦿 Humanoid & Legged Robots

Bipeds, quadrupeds, and everything that walks.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [MuJoCo MPC](https://github.com/google-deepmind/mujoco_mpc) | 1k | C++ | DeepMind's model-predictive control framework for legged locomotion |
| [Pinocchio](https://github.com/stack-of-tasks/pinocchio) | 2k | C++/Python | Fast rigid-body dynamics and kinematics for humanoids |
| [Crocoddyl](https://github.com/loco-3d/crocoddyl) | 1k | C++/Python | Optimal control for multi-contact locomotion |
| [legged_control](https://github.com/qiayuanl/legged_control) | 1k | C++ | Nonlinear MPC for quadruped robots using OCS2 |
| [MIT Cheetah Software](https://github.com/mit-biomimetics/Cheetah-Software) | 1k | C++ | MIT Mini Cheetah quadruped control software |
| [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 2k | XML | Collection of high-quality MuJoCo models of popular robots |

## ⚙️ Robot Control & Dynamics

Low-level and model-based control for robot actuators and systems.

> Also see: [ros2_control](#-ros--ros-2-ecosystem) in the ROS 2 section, [Pinocchio](#-humanoid--legged-robots) and [Crocoddyl](#-humanoid--legged-robots) in Humanoid & Legged.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Drake](https://github.com/RobotLocomotion/drake) | 3k | C++/Python | Model-based design for planning, control, and verification |
| [RBDL](https://github.com/rbdl/rbdl) | 500 | C++ | Rigid Body Dynamics Library for forward/inverse dynamics |
| [Orocos KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 300 | C++ | Kinematics and dynamics library used widely in ROS |
| [control-toolbox](https://github.com/ethz-adrl/control-toolbox) | 1k | C++ | ETH Zurich's C++ control library for optimal control and estimation |
| [Casadi](https://github.com/casadi/casadi) | 2k | C++/Python | Nonlinear optimization and algorithmic differentiation for MPC |

## 🧩 Foundation Models for Robotics

Using LLMs, VLMs, and foundation models to make robots understand language, plan, and reason.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [LeRobot](https://github.com/huggingface/lerobot) | 8k | Python | Hugging Face's end-to-end platform for real-world robot learning |
| [DROID](https://github.com/droid-dataset/droid) | 1k | Python | Large-scale robot manipulation dataset for training foundation models |
| [Octo](https://github.com/octo-models/octo) | 1k | Python | Generalist robot policy trained on Open X-Embodiment |
| [Open X-Embodiment](https://github.com/google-deepmind/open_x_embodiment) | 1k | Python | Google DeepMind's cross-embodiment robot learning dataset |
| [RoboGen](https://github.com/Genesis-Embodied-AI/RoboGen) | 300 | Python | LLM-driven automated robot skill generation |
| [VoxPoser](https://github.com/huangwl18/VoxPoser) | 400 | Python | Composable 3D value maps from LLMs for robotic manipulation |

## 📡 Robot Communication & Middleware

How robots talk to each other and to the cloud.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ROS 2 DDS](https://github.com/ros2/rmw_fastrtps) | 200 | C++ | ROS 2 middleware using Fast-RTPS for real-time communication |
| [MAVLink](https://github.com/mavlink/mavlink) | 3k | C | Lightweight protocol for drone-to-ground communication |
| [ZeroMQ](https://github.com/zeromq/libzmq) | 10k | C | High-performance async messaging library used in robot systems |
| [gRPC](https://github.com/grpc/grpc) | 42k | Multi | High-performance RPC framework for robot-cloud communication |
| [Eclipse Zenoh](https://github.com/eclipse-zenoh/zenoh) | 2k | Rust | Next-gen pub/sub protocol emerging as ROS 2 middleware alternative |

## 🔧 Robot Description & URDF

Define your robot's geometry, joints, and physical properties.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [xacro](https://github.com/ros/xacro) | 200 | Python | XML macro language for generating URDF robot descriptions |
| [MJCF (MuJoCo XML)](https://github.com/google-deepmind/mujoco) | 8k | XML | MuJoCo's native format for defining robot models and environments |
| [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 2k | XML | Curated collection of quality robot models (UR5, Franka, Unitree, etc.) |
| [robot_description](https://github.com/ros/robot_state_publisher) | 200 | C++ | ROS 2 tool that publishes robot transforms from URDF |
| [USD (Universal Scene)](https://github.com/PixarAnimationStudios/OpenUSD) | 6k | C++ | Pixar's scene description used by NVIDIA Isaac Sim |

## 🛡️ Safety & Testing

Test, validate, and ensure robot safety before deployment.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ROS 2 Launch Testing](https://github.com/ros2/launch) | 200 | Python | Integration testing framework for ROS 2 robot systems |
| [rosbag2](https://github.com/ros2/rosbag2) | 200 | C++ | Record and replay ROS 2 topic data for regression testing |
| [CARLA ScenarioRunner](https://github.com/carla-simulator/scenario_runner) | 1k | Python | Define and execute autonomous driving test scenarios |

## 🏗️ Hardware Platforms & Kits

Open-source robot hardware you can build or buy.

| Platform | Type | Description |
|----------|------|-------------|
| [Open Manipulator](https://github.com/ROBOTIS-GIT/open_manipulator) | Arm | ROBOTIS open-source robotic arm with ROS 2 support |
| [TurtleBot](https://github.com/ROBOTIS-GIT/turtlebot3) | Mobile | The standard ROS learning platform — affordable mobile robot |
| [Unitree Go2](https://github.com/unitreerobotics/unitree_ros2) | Quadruped | Affordable quadruped robot with ROS 2 SDK |
| [SO-100/SO-ARM](https://github.com/TheRobotStudio/SO-ARM100) | Arm | Low-cost open-source robot arm for research and education |
| [Franka Emika](https://github.com/frankaemika/franka_ros2) | Arm | Research-grade 7-DoF robot arm with torque-controlled joints |
| [Hello Robot Stretch](https://github.com/hello-robot/stretch_ros2) | Mobile Manipulator | Affordable mobile manipulator for home robotics research |

## 📐 Kinematics & Calibration

Solve forward/inverse kinematics and calibrate sensors.

> Also see: [Pinocchio](#-humanoid--legged-robots) in Humanoid & Legged.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [IKFast](https://github.com/rdiankov/openrave) | 1k | C++ | Analytical inverse kinematics solver (via OpenRAVE) ⚠️ |
| [KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 300 | C++ | Orocos Kinematics and Dynamics Library for ROS |
| [Kalibr](https://github.com/ethz-asl/kalibr) | 4k | C++ | Multi-camera and camera-IMU calibration toolbox from ETH Zurich |
| [easy_handeye](https://github.com/IFL-CAMP/easy_handeye) | 600 | Python | Hand-eye calibration for robot arms with cameras |
| [ikpy](https://github.com/Phylliade/ikpy) | 600 | Python | Pure Python inverse kinematics — great for prototyping |

## 🗣️ Human-Robot Interaction

Natural language, gestures, and intuitive interfaces for commanding robots.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ROS Bridge](https://github.com/RobotWebTools/rosbridge_suite) | 1k | Python | WebSocket interface — build web/mobile robot control GUIs |
| [SayCan](https://github.com/google-research/google-research/tree/master/saycan) | - | Python | Google's LLM-based robot task grounding (Say → Can → Do) |
| [RViz2](https://github.com/ros2/rviz) | 300 | C++ | 3D visualization tool for ROS 2 — the standard robot visualization |
| [Gradio](https://github.com/gradio-app/gradio) | 37k | Python | Build quick web UIs for robot demos and teleoperation interfaces |

## 🕹️ Teleoperation & Digital Twins

Control robots remotely in real-time. VR teleoperation is becoming the primary way to collect robot demonstration data.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open TeleVision](https://github.com/OpenTeleVision/TeleVision) | 1k | Python | Immersive VR teleoperation for bimanual dexterous robot control |
| [GELLO](https://github.com/wuphilipp/gello_software) | 500 | Python | Low-cost universal teleoperation device using 3D-printed replicas |
| [UMI](https://github.com/real-stanford/universal_manipulation_interface) | 1k | Python | Stanford's universal manipulation interface for scalable data collection |
| [Dexterous Teleop](https://github.com/dexsuite/dex-retargeting) | 400 | Python | Hand motion retargeting for dexterous robot teleop |
| [ROS 2 Web Bridge](https://github.com/RobotWebTools/rosbridge_suite) | 1k | Python | WebSocket interface for remote robot monitoring and control |
| [NVIDIA Omniverse](https://developer.nvidia.com/omniverse) | - | Python | Digital twin platform for robot simulation and remote operation |

## 🐝 Multi-Robot & Swarm Systems

Coordinate fleets of robots — warehouse logistics, drone swarms, search and rescue.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open-RMF](https://github.com/open-rmf/rmf) | 1k | C++ | Open Robot Fleet Management for multi-robot coordination |
| [Crazyswarm2](https://github.com/IMRCLab/crazyswarm2) | 300 | Python | ROS 2 framework for flying swarms of Crazyflie nano-drones |
| [MAPF](https://github.com/Jiaoyang-Li/CBSH2-RTC) | 200 | C++ | Multi-Agent Path Finding with conflict-based search |
| [Buzz](https://github.com/MISTLab/Buzz) | 200 | C | Programming language specifically designed for robot swarms |
| [ARGoS](https://github.com/ilpincy/argos3) | 200 | C++ | Large-scale multi-robot simulator (10,000+ robots) |

## ☁️ Cloud Robotics Platforms

Cloud infrastructure, simulation-as-a-service, and fleet management.

| Platform | Type | Description |
|----------|------|-------------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Cloud Sim | GPU-accelerated sim with synthetic data gen, Omniverse-based |
| [AWS RoboMaker](https://aws.amazon.com/robomaker/) | Cloud | ROS-based cloud robotics with simulation and fleet management |
| [Foxglove](https://foxglove.dev/) | SaaS | Cloud-hosted robot data visualization, recording, and analytics |
| [Formant](https://formant.io/) | SaaS | Robot fleet management, teleoperation, and observability platform |
| [Freedom Robotics](https://freedomrobotics.com/) | SaaS | Cloud platform for robot monitoring, control, and analytics |
| [InOrbit](https://www.inorbit.ai/) | SaaS | Robot operations platform with fleet management and edge-cloud |

## 📦 Datasets & Benchmarks

Standard datasets and benchmarks for training and evaluating robot systems.

| Dataset | Scale | Description |
|---------|-------|-------------|
| [Open X-Embodiment](https://github.com/google-deepmind/open_x_embodiment) | 1M+ episodes | Google DeepMind's cross-robot manipulation dataset from 22 labs |
| [DROID](https://github.com/droid-dataset/droid) | 76k demos | In-the-wild robot manipulation demonstrations across 564 scenes |
| [RoboNet](https://github.com/SudeepDasari/RoboNet) | 15M frames | Multi-robot video dataset for visual foresight |
| [BridgeData V2](https://github.com/rail-berkeley/bridge_data_v2) | 60k demos | Large-scale robot manipulation dataset from Berkeley |
| [CALVIN](https://github.com/mees/calvin) | - | Language-conditioned long-horizon manipulation benchmark |
| [RLBench](https://github.com/stepjam/RLBench) | 100 tasks | Large-scale benchmark for robot learning with vision |

## 🆓 Try Free

Cloud robotics platforms and simulators with free tiers — great for getting started without hardware.

| Service | Free Tier | Try It |
|---------|-----------|--------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Free download for developers | [Get started](https://developer.nvidia.com/isaac-sim) |
| [Foxglove](https://foxglove.dev/) | Free for individuals, 1GB data | [Start free](https://foxglove.dev/) |
| [Gazebo Sim](https://gazebosim.org/) | Fully open source | [Download](https://gazebosim.org/) |
| [MuJoCo](https://mujoco.org/) | Fully open source (since 2022) | [Download](https://mujoco.org/) |
| [Webots](https://cyberbotics.com/) | Fully open source | [Download](https://cyberbotics.com/) |
| [CARLA](https://carla.org/) | Fully open source | [Download](https://carla.org/) |

## 🪦 Deprecated Tools Graveyard

These tools are dead, archived, or abandoned. If you see them recommended, use the alternatives listed.

| Dead Tool | Why | Use Instead |
|-----------|-----|-------------|
| ROS 1 (Noetic) | EOL May 2025, no new features | ROS 2 (Humble/Jazzy/Rolling) |
| Gazebo Classic | End of life, replaced | Gazebo Sim (gz-sim) |
| OpenAI Gym | Deprecated, unmaintained | Gymnasium (Farama Foundation) |
| AirSim | Archived by Microsoft Jan 2024 | CARLA, Isaac Sim, Gazebo |
| OpenRAVE | Effectively unmaintained since 2022 | MoveIt 2, Drake |
| PyRobot | Meta archived, last update 2021 | LeRobot, ROS 2 |
| V-REP | Renamed to CoppeliaSim | CoppeliaSim (same tool, new name) |
| Stage (2D sim) | Unmaintained since 2019 | Gazebo, CARLA (2D not needed) |
| Player/Stage | Unmaintained since 2016 | ROS 2 + Gazebo |

---

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

- Add tools you've actually used or evaluated
- Include star count and language where applicable
- Note if a tool is unmaintained (last commit >1 year ago)
- Commercial tools/services are fine but must be clearly labeled
