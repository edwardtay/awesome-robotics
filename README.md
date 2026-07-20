# Awesome Robotics [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Stars](https://img.shields.io/github/actions/workflow/status/edwardtay/awesome-robotics/update-stars.yml?label=star%20updates)](https://github.com/edwardtay/awesome-robotics/actions/workflows/update-stars.yml)
[![Links](https://img.shields.io/github/actions/workflow/status/edwardtay/awesome-robotics/links.yml?label=links)](https://github.com/edwardtay/awesome-robotics/actions/workflows/links.yml)
[![Last Commit](https://img.shields.io/github/last-commit/edwardtay/awesome-robotics)](https://github.com/edwardtay/awesome-robotics/commits/main)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/edwardtay/awesome-robotics/pulls)
[![License: CC0](https://img.shields.io/badge/License-CC0-lightgrey.svg)](LICENSE)

> A curated list of robotics frameworks, simulators, tools, platforms, datasets, and learning resources.

> ⚠️ = known maintenance concern; verify repository status before adoption.

> 📚 **New:** [**The Robotics Canon**](https://blog.robo2u.com/canon) — the timeless, must-read papers, textbooks, courses & talks of robotics, adversarially fact-checked and grouped by subfield.

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

---

## 🤖 ROS / ROS 2 Ecosystem

ROS 2 is the production-ready successor to ROS 1 — real-time support, DDS communication, better security.

| Tool | Stars | Description |
|------|-------|-------------|
| [ROS 2](https://github.com/ros2/ros2) | 6k | Robot middleware — real-time, DDS, multi-platform. |
| [Navigation2](https://github.com/ros-navigation/navigation2) | 4k | Path planning, obstacle avoidance, behavior trees. |
| [MoveIt 2](https://github.com/moveit/moveit2) | 2k | Motion planning for robotic arms. |
| [Foxglove SDK](https://github.com/foxglove/foxglove-sdk) | 279 | SDK for publishing multimodal robotics data to Foxglove visualizations. |
| [micro-ROS](https://github.com/micro-ROS/micro_ros_setup) | 500 | ROS 2 on microcontrollers (ESP32, STM32). |
| [ros2_control](https://github.com/ros-controls/ros2_control) | 948 | Hardware abstraction and real-time control. |
| [ROS Bridge](https://github.com/RobotWebTools/rosbridge_suite) | 1k | WebSocket bridge — connect web/mobile apps to robots. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🎮 Simulation & Physics Engines

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Genesis](https://github.com/Genesis-Embodied-AI/genesis-world) | 30k | Python | Simulation platform for general-purpose robotics and embodied-AI learning. |
| [PyBullet](https://github.com/bulletphysics/bullet3) | 15k | C++/Python | Real-time physics engine, widely used in RL. |
| [MuJoCo](https://github.com/google-deepmind/mujoco) | 14k | C | Physics engine widely used for robotics and reinforcement learning. |
| [Isaac Lab](https://github.com/isaac-sim/IsaacLab) | 8k | Python | NVIDIA's framework for robot learning at GPU scale. |
| [Webots](https://github.com/cyberbotics/webots) | 4k | C++ | Robot simulator with realistic physics and 3D rendering. |
| [Drake](https://github.com/RobotLocomotion/drake) | 4k | C++/Python | MIT — planning, control, and verification toolkit. |
| [Gazebo](https://github.com/gazebosim/gz-sim) | 1k | C++ | Standard ROS simulator with accurate physics and sensors. |
| [NVIDIA Isaac Sim](https://github.com/isaac-sim/IsaacSim) | 4k | Python | GPU-accelerated sim with photorealistic rendering. |
| [SAPIEN](https://github.com/haosulab/SAPIEN) | 796 | Python | Manipulation sim for articulated objects. |
| [CoppeliaSim](https://github.com/CoppeliaRobotics/CoppeliaSimLib) | 148 | C++ | Versatile robot simulator (formerly V-REP). |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧭 Motion Planning & Navigation

> Also see: [MoveIt 2](#-ros--ros-2-ecosystem) and [Navigation2](#-ros--ros-2-ecosystem) in ROS 2.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OMPL](https://github.com/ompl/ompl) | 2k | C++ | Sampling-based planners (RRT, PRM, etc.). |
| [CuRobo](https://github.com/NVlabs/curobo) | 2k | Python | NVIDIA CUDA-accelerated motion generation and planning. |
| [MoveIt Pro SDK](https://github.com/PickNikRobotics/moveit_studio_sdk) | 10 | C++ | Public SDK mirror for building MoveIt Pro behaviors and integrations. |
| [Ruckig](https://github.com/pantor/ruckig) | 1k | C++ | Real-time jerk-limited, time-optimal trajectory generation (used by MoveIt 2). |
| [Tesseract](https://github.com/tesseract-robotics/tesseract) | 376 | C++ | Motion-planning environment for industrial robotics. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 👁️ Computer Vision & Perception

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OpenCV](https://github.com/opencv/opencv) | 90k | C++/Python | Foundational computer vision library. |
| [Segment Anything](https://github.com/facebookresearch/segment-anything) | 55k | Python | Meta's zero-shot segmentation — segment any object. |
| [YOLOv8/11](https://github.com/ultralytics/ultralytics) | 60k | Python | Real-time detection, segmentation, and pose estimation. |
| [Open3D](https://github.com/isl-org/Open3D) | 14k | C++/Python | 3D point cloud processing, RGBD, visualization. |
| [PCL](https://github.com/PointCloudLibrary/pcl) | 11k | C++ | Point clouds — filtering, segmentation, registration. |
| [Grounded SAM](https://github.com/IDEA-Research/Grounded-SAM-2) | 4k | Python | Open-set detection + segmentation for robot perception. |
| [DepthAnything](https://github.com/DepthAnything/Depth-Anything-V2) | 8k | Python | Monocular depth estimation for any image. |
| [FoundationPose](https://github.com/NVlabs/FoundationPose) | 3k | Python | NVIDIA 6DoF pose estimation without CAD models. |
| [ZED SDK](https://github.com/stereolabs/zed-sdk) | 1k | C++/Python | Stereo camera SDK — depth, tracking, spatial mapping. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🚗 Autonomous Vehicles

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [openpilot](https://github.com/commaai/openpilot) | 63k | Python | comma.ai driver assist for 300+ car models. |
| [Apollo](https://github.com/ApolloAuto/apollo) | 27k | C++ | Baidu's autonomous driving platform. |
| [CARLA](https://github.com/carla-simulator/carla) | 14k | C++ | Autonomous driving simulator. |
| [Autoware](https://github.com/autowarefoundation/autoware) | 12k | C++ | Full-stack autonomous driving on ROS 2. |
| [Lanelet2](https://github.com/fzi-forschungszentrum-informatik/Lanelet2) | 954 | C++ | HD map framework for autonomous driving. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🗺️ SLAM & Localization

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [3D Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) | 23k | Python/CUDA | Real-time radiance field rendering — next-gen mapping. |
| [Nerfstudio](https://github.com/nerfstudio-project/nerfstudio) | 12k | Python | NeRF-based 3D reconstruction for scene understanding. |
| [ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3) | 9k | C++ | Visual/visual-inertial/multi-map SLAM (mono, stereo, RGBD). ⚠️ |
| [Cartographer](https://github.com/cartographer-project/cartographer) | 8k | C++ | Google's real-time 2D and 3D SLAM. ⚠️ |
| [LIO-SAM](https://github.com/TixiaoShan/LIO-SAM) | 5k | C++ | Tightly-coupled LiDAR inertial odometry. |
| [GTSAM](https://github.com/borglab/gtsam) | 4k | C++ | Factor graph optimization for SLAM and SFM. |
| [RTAB-Map](https://github.com/introlab/rtabmap) | 4k | C++ | RGB-D, Stereo, and LiDAR SLAM with real-time loop closure. |
| [FAST-LIO2](https://github.com/hku-mars/FAST_LIO) | 5k | C++ | Fast direct LiDAR-inertial odometry from HKU. |
| [KISS-ICP](https://github.com/PRBonn/kiss-icp) | 2k | C++/Python | Minimal, robust LiDAR odometry. |
| [OpenVSLAM](https://github.com/stella-cv/stella_vslam) | 1k | C++ | Visual SLAM supporting any camera model. |
| [slam_toolbox](https://github.com/SteveMacenski/slam_toolbox) | 3k | C++ | Lifelong 2D LiDAR SLAM — default mapper for ROS 2 / Nav2. |
| [OpenVINS](https://github.com/rpng/open_vins) | 3k | C++ | Filter-based visual-inertial navigation research platform. |
| [GLIM](https://github.com/koide3/glim) | 2k | C++ | Versatile, GPU-accelerated 3D LiDAR SLAM framework. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧠 Robot Learning & RL

> Also see: [LeRobot](#-foundation-models-for-robotics) in Foundation Models, [Datasets & Benchmarks](#-datasets--benchmarks) for training data.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) | 14k | Python | RL algorithms (PPO, SAC, TD3, etc.). |
| [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) | 12k | Python | Standard API for RL environments (successor to OpenAI Gym). |
| [Robosuite](https://github.com/ARISE-Initiative/robosuite) | 3k | Python | Manipulation benchmark with MuJoCo backend. |
| [ManiSkill](https://github.com/mani-skill/ManiSkill) | 3k | Python | GPU-parallelized manipulation benchmark on SAPIEN. |
| [robomimic](https://github.com/ARISE-Initiative/robomimic) | 1k | Python | Imitation learning for robot manipulation. |
| [rl_games](https://github.com/Denys88/rl_games) | 1k | Python | RL framework designed for GPU sim environments. |
| [CleanRL](https://github.com/vwxyzjn/cleanrl) | 10k | Python | Single-file, high-quality deep-RL algorithm implementations. |
| [RSL-RL](https://github.com/leggedrobotics/rsl_rl) | 3k | Python | Fast GPU PPO library from ETH Zurich (standard for Isaac Lab). |
| [skrl](https://github.com/Toni-SM/skrl) | 1k | Python | Modular RL library (PyTorch/JAX) with native Isaac Lab support. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🦾 Manipulation & Grasping

> Also see: [MoveIt 2](#-ros--ros-2-ecosystem) in ROS 2, [CuRobo](#-motion-planning--navigation) in Motion Planning.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [GraspNet](https://github.com/graspnet/graspnet-baseline) | 980 | Python | 6-DoF grasp detection on point clouds. |
| [AnyGrasp](https://github.com/graspnet/anygrasp_sdk) | 936 | Python | Grasp detection for any object in dense clutter. |
| [Contact-GraspNet](https://github.com/NVlabs/contact_graspnet) | 513 | Python | NVIDIA 6-DoF grasps conditioned on contact regions. |
| [Dex-Net](https://github.com/BerkeleyAutomation/dex-net) | 363 | Python | Deep learning grasp quality for bin-picking. ⚠️ |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🚁 Drones & UAVs

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ArduPilot](https://github.com/ArduPilot/ardupilot) | 16k | C++ | Autopilot software for planes, copters, rovers, and submarines. |
| [PX4](https://github.com/PX4/PX4-Autopilot) | 12k | C++ | Flight controller for drones and VTOL. |
| [MAVLink](https://github.com/mavlink/mavlink) | 2k | C | Lightweight drone-to-ground messaging protocol. |
| [QGroundControl](https://github.com/mavlink/qgroundcontrol) | 5k | C++ | Cross-platform ground control station. |
| [MAVROS](https://github.com/mavlink/mavros) | 1k | C++ | MAVLink driver for ROS — connect to PX4/ArduPilot. |
| [Aerostack2](https://github.com/aerostack2/aerostack2) | 363 | C++ | ROS 2 framework for autonomous aerial robots. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🦿 Humanoid & Legged Robots

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Pinocchio](https://github.com/stack-of-tasks/pinocchio) | 4k | C++/Python | Fast rigid-body dynamics and kinematics for humanoids. |
| [MuJoCo MPC](https://github.com/google-deepmind/mujoco_mpc) | 2k | C++ | DeepMind's model-predictive control for locomotion. |
| [Crocoddyl](https://github.com/loco-3d/crocoddyl) | 1k | C++/Python | Optimal control for multi-contact locomotion. |
| [legged_control](https://github.com/qiayuanl/legged_control) | 2k | C++ | Nonlinear MPC for quadrupeds using OCS2. |
| [MIT Cheetah Software](https://github.com/mit-biomimetics/Cheetah-Software) | 3k | C++ | Mini Cheetah quadruped control. ⚠️ |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ⚙️ Robot Control & Dynamics

> Also see: [Pinocchio](#-humanoid--legged-robots) and [Crocoddyl](#-humanoid--legged-robots) in Humanoid & Legged, [ros2_control](#-ros--ros-2-ecosystem) in ROS 2.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Casadi](https://github.com/casadi/casadi) | 2k | C++/Python | Nonlinear optimization and algorithmic differentiation for MPC. |
| [control-toolbox](https://github.com/ethz-adrl/control-toolbox) | 2k | C++ | ETH Zurich — optimal control and estimation. ⚠️ |
| [RBDL](https://github.com/rbdl/rbdl) | 701 | C++ | Rigid Body Dynamics — forward/inverse dynamics. |
| [Orocos KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 894 | C++ | Kinematics and dynamics library for ROS. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🧩 Foundation Models for Robotics

Using LLMs and VLMs to make robots understand language, plan, and reason.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [LeRobot](https://github.com/huggingface/lerobot) | 26k | Python | Hugging Face's platform for real-world robot learning with shared datasets. |
| [Octo](https://github.com/octo-models/octo) | 2k | Python | Generalist robot policy trained on Open X-Embodiment. ⚠️ |
| [VoxPoser](https://github.com/huangwl18/VoxPoser) | 823 | Python | Composable 3D value maps from LLMs for manipulation. |
| [RoboGen](https://github.com/Genesis-Embodied-AI/RoboGen) | 1k | Python | LLM-driven automated robot skill generation. |
| [OpenVLA](https://github.com/openvla/openvla) | 7k | Python | 7B open vision-language-action model for generalist manipulation. |
| [openpi (π0)](https://github.com/Physical-Intelligence/openpi) | 13k | Python | Physical Intelligence's open π0 / π0.5 VLA weights and code. |
| [Isaac GR00T](https://github.com/NVIDIA/Isaac-GR00T) | 8k | Python | NVIDIA open humanoid foundation model (GR00T N). |
| [NVIDIA Cosmos](https://github.com/NVIDIA/cosmos) | 11k | Python | Open world-foundation models for physical AI / synthetic data. |
| [Diffusion Policy](https://github.com/real-stanford/diffusion_policy) | 4k | Python | Visuomotor policy learning via action diffusion. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📡 Robot Communication & Middleware

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [gRPC](https://github.com/grpc/grpc) | 45k | Multi | RPC framework for robot-cloud communication. |
| [ZeroMQ](https://github.com/zeromq/libzmq) | 11k | C | Async messaging library for robot systems. |
| [Eclipse Zenoh](https://github.com/eclipse-zenoh/zenoh) | 3k | Rust | Pub/sub protocol emerging as ROS 2 middleware alternative. |
| [ROS 2 DDS](https://github.com/ros2/rmw_fastrtps) | 200 | C++ | ROS 2 middleware using Fast-RTPS. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🔧 Robot Description & URDF

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [MuJoCo](https://github.com/google-deepmind/mujoco) | 14k | XML | MJCF format for robot models and environments. |
| [USD (Universal Scene)](https://github.com/PixarAnimationStudios/OpenUSD) | 7k | C++ | Pixar's scene description — used by NVIDIA Isaac Sim. |
| [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 4k | XML | Curated robot models (UR5, Franka, Unitree, etc.). |
| [xacro](https://github.com/ros/xacro) | 124 | Python | XML macro language for URDF. |
| [robot_state_publisher](https://github.com/ros/robot_state_publisher) | 120 | C++ | Publishes robot transforms from URDF. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🛡️ Safety & Testing

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [CARLA ScenarioRunner](https://github.com/carla-simulator/scenario_runner) | 671 | Python | Autonomous driving test scenarios. |
| [ROS 2 Launch Testing](https://github.com/ros2/launch) | 157 | Python | Integration testing for ROS 2 systems. |
| [rosbag2](https://github.com/ros2/rosbag2) | 425 | C++ | Record and replay ROS 2 topic data. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🏗️ Hardware Platforms & Kits

| Platform | Type | Description |
|----------|------|-------------|
| [Open Manipulator](https://github.com/ROBOTIS-GIT/open_manipulator) | Arm | ROBOTIS robotic arm with ROS 2 support. |
| [TurtleBot](https://github.com/ROBOTIS-GIT/turtlebot3) | Mobile | Standard ROS learning platform — affordable mobile robot. |
| [Unitree Go2](https://github.com/unitreerobotics/unitree_ros2) | Quadruped | Affordable quadruped with ROS 2 SDK. |
| [SO-100/SO-ARM](https://github.com/TheRobotStudio/SO-ARM100) | Arm | Low-cost robot arm for research and education. |
| [Franka Emika](https://github.com/frankarobotics/franka_ros2) | Arm | Research-grade 7-DoF arm with torque control. |
| [Hello Robot Stretch](https://github.com/hello-robot/stretch_ros2) | Mobile Manipulator | Affordable mobile manipulator for home robotics. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📐 Kinematics & Calibration

> Also see: [Pinocchio](#-humanoid--legged-robots) in Humanoid & Legged.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Kalibr](https://github.com/ethz-asl/kalibr) | 6k | C++ | Multi-camera and camera-IMU calibration from ETH Zurich. |
| [IKFast](https://github.com/rdiankov/openrave) | 812 | C++ | Analytical inverse kinematics solver distributed with OpenRAVE. |
| [ikpy](https://github.com/Phylliade/ikpy) | 1k | Python | Pure Python inverse kinematics — great for prototyping. |
| [easy_handeye](https://github.com/IFL-CAMP/easy_handeye) | 1k | Python | Hand-eye calibration for robot arms. |
| [KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 894 | C++ | Orocos kinematics and dynamics for ROS. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🗣️ Human-Robot Interaction

> Also see: [ROS Bridge](#-ros--ros-2-ecosystem) for web/mobile robot control.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Gradio](https://github.com/gradio-app/gradio) | 43k | Python | Quick web UIs for robot demos and teleoperation. |
| [SayCan](https://github.com/google-research/google-research/tree/master/saycan) | - | Python | Google's LLM-based robot task grounding. |
| [RViz2](https://github.com/ros2/rviz) | 472 | C++ | 3D visualization for ROS 2. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🕹️ Teleoperation & Digital Twins

VR teleoperation is the primary way to collect robot demonstration data.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open TeleVision](https://github.com/OpenTeleVision/TeleVision) | 1k | Python | Immersive VR teleoperation for bimanual dexterous control. |
| [UMI](https://github.com/real-stanford/universal_manipulation_interface) | 2k | Python | Stanford's manipulation interface for scalable data collection. |
| [GELLO](https://github.com/wuphilipp/gello_software) | 505 | Python | Low-cost teleoperation with 3D-printed replicas. |
| [Dexterous Teleop](https://github.com/dexsuite/dex-retargeting) | 1k | Python | Hand motion retargeting for dexterous robot teleop. |
| [NVIDIA Omniverse](https://developer.nvidia.com/omniverse) | - | Python | Digital twin platform for robot sim and remote operation. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🐝 Multi-Robot & Swarm Systems

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open-RMF](https://github.com/open-rmf/rmf) | 420 | C++ | Robot Fleet Management for multi-robot coordination. |
| [Crazyswarm2](https://github.com/IMRCLab/crazyswarm2) | 243 | Python | ROS 2 framework for Crazyflie nano-drone swarms. |
| [ARGoS](https://github.com/ilpincy/argos3) | 312 | C++ | Multi-robot simulator — 10,000+ robots. |
| [MAPF](https://github.com/Jiaoyang-Li/CBSH2-RTC) | 136 | C++ | Multi-Agent Path Finding with conflict-based search. |
| [Buzz](https://github.com/MISTLab/Buzz) | 318 | C | Programming language for robot swarms. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## ☁️ Cloud Robotics Platforms

| Platform | Type | Description |
|----------|------|-------------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Cloud Sim | GPU-accelerated sim with synthetic data gen. |
| [AWS RoboMaker](https://aws.amazon.com/robomaker/) | Cloud | ROS-based cloud robotics with simulation and fleet management. |
| [Foxglove](https://foxglove.dev/) | SaaS | Cloud robot data visualization and analytics. |
| [Formant](https://formant.io/) | SaaS | Fleet management, teleoperation, and observability. |
| [Viam](https://www.viam.com/) | SaaS | Open robot app/fleet platform — config, data, ML, teleop. |
| [Freedom Robotics](https://freedomrobotics.com/) | SaaS | Robot monitoring, control, and analytics. |
| [InOrbit](https://www.inorbit.ai/) | SaaS | Robot operations with fleet management. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 📦 Datasets & Benchmarks

| Dataset | Scale | Description |
|---------|-------|-------------|
| [Open X-Embodiment](https://github.com/google-deepmind/open_x_embodiment) | 1M+ episodes | DeepMind's cross-embodiment manipulation dataset (22 embodiments, 21 institutions). |
| [AgiBot-World](https://github.com/OpenDriveLab/AgiBot-World) | 1M+ trajectories | Large-scale real-world embodied manipulation dataset. |
| [LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO) | 130 tasks | Lifelong robot-manipulation benchmark suite. |
| [DROID](https://github.com/droid-dataset/droid) | 76k demos | In-the-wild robot manipulation across 564 scenes. |
| [BridgeData V2](https://github.com/rail-berkeley/bridge_data_v2) | 60k demos | Robot manipulation dataset from Berkeley. |
| [RoboNet](https://github.com/SudeepDasari/RoboNet) | 15M frames | Multi-robot video for visual foresight. |
| [CALVIN](https://github.com/mees/calvin) | - | Language-conditioned long-horizon manipulation benchmark. |
| [RLBench](https://github.com/stepjam/RLBench) | 100 tasks | Benchmark for robot learning with vision. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🆓 Try Free

| Service | Free Tier | Try It |
|---------|-----------|--------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Free for developers | [Get started](https://developer.nvidia.com/isaac-sim) |
| [Foxglove](https://foxglove.dev/) | Free for individuals, 1GB data | [Start free](https://foxglove.dev/) |
| [Gazebo Sim](https://gazebosim.org/) | Fully open source | [Download](https://gazebosim.org/) |
| [MuJoCo](https://mujoco.org/) | Fully open source (since 2022) | [Download](https://mujoco.org/) |
| [Webots](https://cyberbotics.com/) | Fully open source | [Download](https://cyberbotics.com/) |
| [CARLA](https://carla.org/) | Fully open source | [Download](https://carla.org/) |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

## 🪦 Deprecated Tools Graveyard

| Dead Tool | Why | Use Instead |
|-----------|-----|-------------|
| ROS 1 (Noetic) | EOL May 2025 | ROS 2 (Humble/Jazzy/Rolling). |
| Gazebo Classic | End of life | Gazebo Sim (gz-sim). |
| OpenAI Gym | Deprecated | Gymnasium (Farama Foundation). |
| AirSim | Archived by Microsoft Jan 2024 | CARLA, Isaac Sim, Gazebo. |
| OpenRAVE | Unmaintained since 2022 | MoveIt 2, Drake. |
| PyRobot | Meta archived, last update 2021 | LeRobot, ROS 2. |
| V-REP | Renamed | CoppeliaSim. |
| Stage (2D sim) | Unmaintained since 2019 | Gazebo. |
| Player/Stage | Unmaintained since 2016 | ROS 2 + Gazebo. |

<p align="right">(<a href="#readme">⬆ back to top</a>)</p>

---

## 🔗 Related Awesome Lists

| List | Description |
|------|-------------|
| [awesome-ai](https://github.com/edwardtay/awesome-ai) | AI APIs, tools, frameworks, platforms, and learning resources. |
| [awesome-scrapers](https://github.com/edwardtay/awesome-scrapers) | Scrapers, crawlers, and data extraction tools. |
| [awesome-web3-ai](https://github.com/edwardtay/awesome-web3-ai) | Web3 x AI tools, agent frameworks, and protocols. |
| [awesome-OSINT](https://github.com/edwardtay/awesome-OSINT) | OSINT tools: people search, domains, social media, geolocation, breach data. |

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

- Add tools you've actually used or evaluated
- Include star count and language where applicable
- Note if a tool is unmaintained (last commit >1 year ago)
- Commercial tools/services are fine but must be clearly labeled


To the extent possible under law, [Edward Tay](https://github.com/edwardtay) has waived all copyright and related or neighboring rights to this work.
