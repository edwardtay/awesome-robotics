# Awesome Robotics [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of robotics frameworks, simulators, tools, and platforms. 170+ tools across 23 categories.

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

---

## 🤖 ROS / ROS 2 Ecosystem

ROS 2 is the production-ready successor to ROS 1 — real-time support, DDS communication, better security.

| Tool | Stars | Description |
|------|-------|-------------|
| [ROS 2](https://github.com/ros2/ros2) | 4k | Robot middleware — real-time, DDS, multi-platform |
| [Navigation2](https://github.com/ros-navigation/navigation2) | 3k | Path planning, obstacle avoidance, behavior trees |
| [MoveIt 2](https://github.com/moveit/moveit2) | 3k | Motion planning for robotic arms |
| [Foxglove](https://github.com/foxglove/studio) | 2k | Robotics observability and visualization platform |
| [micro-ROS](https://github.com/micro-ROS/micro_ros_setup) | 1k | ROS 2 on microcontrollers (ESP32, STM32) |
| [ros2_control](https://github.com/ros-controls/ros2_control) | 1k | Hardware abstraction and real-time control |
| [ROS Bridge](https://github.com/RobotWebTools/rosbridge_suite) | 1k | WebSocket bridge — connect web/mobile apps to robots |

## 🎮 Simulation & Physics Engines

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Genesis](https://github.com/Genesis-Embodied-AI/Genesis) | 24k | Python | Generative physics platform for embodied AI research |
| [PyBullet](https://github.com/bulletphysics/bullet3) | 13k | C++/Python | Real-time physics engine, widely used in RL |
| [MuJoCo](https://github.com/google-deepmind/mujoco) | 8k | C | DeepMind's physics engine — the standard for robot RL |
| [Isaac Lab](https://github.com/isaac-sim/IsaacLab) | 3k | Python | NVIDIA's framework for robot learning at GPU scale |
| [Webots](https://github.com/cyberbotics/webots) | 3k | C++ | Robot simulator with realistic physics and 3D rendering |
| [Drake](https://github.com/RobotLocomotion/drake) | 3k | C++/Python | MIT — planning, control, and verification toolkit |
| [Gazebo](https://github.com/gazebosim/gz-sim) | 1k | C++ | Standard ROS simulator with accurate physics and sensors |
| [NVIDIA Isaac Sim](https://github.com/isaac-sim) | - | Python | GPU-accelerated sim with photorealistic rendering |
| [SAPIEN](https://github.com/haosulab/SAPIEN) | 1k | Python | Manipulation sim for articulated objects |
| [CoppeliaSim](https://github.com/CoppeliaRobotics/CoppeliaSimLib) | 1k | C++ | Versatile robot simulator (formerly V-REP) |

## 🧭 Motion Planning & Navigation

> Also see: [MoveIt 2](#-ros--ros-2-ecosystem) and [Navigation2](#-ros--ros-2-ecosystem) in ROS 2.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OMPL](https://github.com/ompl/ompl) | 1k | C++ | Sampling-based planners (RRT, PRM, etc.) |
| [CuRobo](https://github.com/NVlabs/curobo) | 1k | Python | NVIDIA CUDA-accelerated planning — 1000x faster than OMPL |
| [Moveit Pro](https://github.com/PickNikRobotics/moveit_studio) | 200 | C++ | Commercial MoveIt wrapper with behavior trees and web UI |

## 👁️ Computer Vision & Perception

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [OpenCV](https://github.com/opencv/opencv) | 80k | C++/Python | Foundational computer vision library |
| [Segment Anything](https://github.com/facebookresearch/segment-anything) | 50k | Python | Meta's zero-shot segmentation — segment any object |
| [YOLOv8/11](https://github.com/ultralytics/ultralytics) | 38k | Python | Real-time detection, segmentation, and pose estimation |
| [Open3D](https://github.com/isl-org/Open3D) | 12k | C++/Python | 3D point cloud processing, RGBD, visualization |
| [PCL](https://github.com/PointCloudLibrary/pcl) | 10k | C++ | Point clouds — filtering, segmentation, registration |
| [Grounded SAM](https://github.com/IDEA-Research/Grounded-SAM-2) | 5k | Python | Open-set detection + segmentation for robot perception |
| [DepthAnything](https://github.com/DepthAnything/Depth-Anything-V2) | 4k | Python | Monocular depth estimation for any image |
| [FoundationPose](https://github.com/NVlabs/FoundationPose) | 2k | Python | NVIDIA 6DoF pose estimation without CAD models |
| [ZED SDK](https://github.com/stereolabs/zed-sdk) | 1k | C++/Python | Stereo camera SDK — depth, tracking, spatial mapping |

## 🚗 Autonomous Vehicles

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [openpilot](https://github.com/commaai/openpilot) | 51k | Python | comma.ai driver assist for 275+ car models |
| [Apollo](https://github.com/ApolloAuto/apollo) | 26k | C++ | Baidu's autonomous driving platform |
| [CARLA](https://github.com/carla-simulator/carla) | 11k | C++ | Autonomous driving simulator |
| [Autoware](https://github.com/autowarefoundation/autoware) | 9k | C++ | Full-stack autonomous driving on ROS 2 |
| [Lanelet2](https://github.com/fzi-forschungszentrum-informatik/Lanelet2) | 1k | C++ | HD map framework for autonomous driving |

## 🗺️ SLAM & Localization

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [3D Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting) | 15k | Python/CUDA | Real-time radiance field rendering — next-gen mapping |
| [Nerfstudio](https://github.com/nerfstudio-project/nerfstudio) | 10k | Python | NeRF-based 3D reconstruction for scene understanding |
| [ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3) | 7k | C++ | Visual/visual-inertial/multi-map SLAM (mono, stereo, RGBD) |
| [Cartographer](https://github.com/cartographer-project/cartographer) | 7k | C++ | Google's real-time 2D and 3D SLAM ⚠️ |
| [LIO-SAM](https://github.com/TixiaoShan/LIO-SAM) | 4k | C++ | Tightly-coupled LiDAR inertial odometry |
| [GTSAM](https://github.com/borglab/gtsam) | 3k | C++ | Factor graph optimization for SLAM and SFM |
| [RTAB-Map](https://github.com/introlab/rtabmap) | 3k | C++ | RGB-D, Stereo, and LiDAR SLAM with real-time loop closure |
| [FAST-LIO2](https://github.com/hku-mars/FAST_LIO) | 3k | C++ | Fast direct LiDAR-inertial odometry from HKU |
| [KISS-ICP](https://github.com/PRBonn/kiss-icp) | 2k | C++/Python | Minimal, robust LiDAR odometry |
| [OpenVSLAM](https://github.com/stella-cv/stella_vslam) | 2k | C++ | Visual SLAM supporting any camera model |

## 🧠 Robot Learning & RL

> Also see: [LeRobot](#-foundation-models-for-robotics) in Foundation Models, [Datasets & Benchmarks](#-datasets--benchmarks) for training data.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) | 9k | Python | RL algorithms (PPO, SAC, TD3, etc.) |
| [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) | 7k | Python | Standard API for RL environments (successor to OpenAI Gym) |
| [Robosuite](https://github.com/ARISE-Initiative/robosuite) | 2k | Python | Manipulation benchmark with MuJoCo backend |
| [ManiSkill](https://github.com/haosulab/ManiSkill) | 1k | Python | GPU-parallelized manipulation benchmark on SAPIEN |
| [robomimic](https://github.com/ARISE-Initiative/robomimic) | 1k | Python | Imitation learning for robot manipulation |
| [rl_games](https://github.com/Denys88/rl_games) | 1k | Python | RL framework designed for GPU sim environments |

## 🦾 Manipulation & Grasping

> Also see: [MoveIt 2](#-ros--ros-2-ecosystem) in ROS 2, [CuRobo](#-motion-planning--navigation) in Motion Planning.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [GraspNet](https://github.com/graspnet/graspnet-baseline) | 1k | Python | 6-DoF grasp detection on point clouds |
| [AnyGrasp](https://github.com/graspnet/anygrasp_sdk) | 1k | Python | Grasp detection for any object in dense clutter |
| [Contact-GraspNet](https://github.com/NVlabs/contact_graspnet) | 1k | Python | NVIDIA 6-DoF grasps conditioned on contact regions |
| [Dex-Net](https://github.com/BerkeleyAutomation/dex-net) | 1k | Python | Deep learning grasp quality for bin-picking |

## 🚁 Drones & UAVs

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [ArduPilot](https://github.com/ArduPilot/ardupilot) | 12k | C++ | Most versatile autopilot — planes, copters, rovers, subs |
| [PX4](https://github.com/PX4/PX4-Autopilot) | 9k | C++ | Flight controller for drones and VTOL |
| [MAVLink](https://github.com/mavlink/mavlink) | 3k | C | Lightweight drone-to-ground messaging protocol |
| [QGroundControl](https://github.com/mavlink/qgroundcontrol) | 3k | C++ | Cross-platform ground control station |
| [MAVROS](https://github.com/mavlink/mavros) | 1k | C++ | MAVLink driver for ROS — connect to PX4/ArduPilot |
| [Aerostack2](https://github.com/aerostack2/aerostack2) | 200 | C++ | ROS 2 framework for autonomous aerial robots |

## 🦿 Humanoid & Legged Robots

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Pinocchio](https://github.com/stack-of-tasks/pinocchio) | 2k | C++/Python | Fast rigid-body dynamics and kinematics for humanoids |
| [MuJoCo MPC](https://github.com/google-deepmind/mujoco_mpc) | 1k | C++ | DeepMind's model-predictive control for locomotion |
| [Crocoddyl](https://github.com/loco-3d/crocoddyl) | 1k | C++/Python | Optimal control for multi-contact locomotion |
| [legged_control](https://github.com/qiayuanl/legged_control) | 1k | C++ | Nonlinear MPC for quadrupeds using OCS2 |
| [MIT Cheetah Software](https://github.com/mit-biomimetics/Cheetah-Software) | 1k | C++ | Mini Cheetah quadruped control |

## ⚙️ Robot Control & Dynamics

> Also see: [Pinocchio](#-humanoid--legged-robots) and [Crocoddyl](#-humanoid--legged-robots) in Humanoid & Legged, [ros2_control](#-ros--ros-2-ecosystem) in ROS 2.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Casadi](https://github.com/casadi/casadi) | 2k | C++/Python | Nonlinear optimization and algorithmic differentiation for MPC |
| [control-toolbox](https://github.com/ethz-adrl/control-toolbox) | 1k | C++ | ETH Zurich — optimal control and estimation |
| [RBDL](https://github.com/rbdl/rbdl) | 500 | C++ | Rigid Body Dynamics — forward/inverse dynamics |
| [Orocos KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 300 | C++ | Kinematics and dynamics library for ROS |

## 🧩 Foundation Models for Robotics

Using LLMs and VLMs to make robots understand language, plan, and reason.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [LeRobot](https://github.com/huggingface/lerobot) | 8k | Python | Hugging Face's platform for real-world robot learning with shared datasets |
| [Octo](https://github.com/octo-models/octo) | 1k | Python | Generalist robot policy trained on Open X-Embodiment |
| [VoxPoser](https://github.com/huangwl18/VoxPoser) | 400 | Python | Composable 3D value maps from LLMs for manipulation |
| [RoboGen](https://github.com/Genesis-Embodied-AI/RoboGen) | 300 | Python | LLM-driven automated robot skill generation |

## 📡 Robot Communication & Middleware

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [gRPC](https://github.com/grpc/grpc) | 42k | Multi | RPC framework for robot-cloud communication |
| [ZeroMQ](https://github.com/zeromq/libzmq) | 10k | C | Async messaging library for robot systems |
| [Eclipse Zenoh](https://github.com/eclipse-zenoh/zenoh) | 2k | Rust | Pub/sub protocol emerging as ROS 2 middleware alternative |
| [ROS 2 DDS](https://github.com/ros2/rmw_fastrtps) | 200 | C++ | ROS 2 middleware using Fast-RTPS |

## 🔧 Robot Description & URDF

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [MuJoCo](https://github.com/google-deepmind/mujoco) | 8k | XML | MJCF format for robot models and environments |
| [USD (Universal Scene)](https://github.com/PixarAnimationStudios/OpenUSD) | 6k | C++ | Pixar's scene description — used by NVIDIA Isaac Sim |
| [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 2k | XML | Curated robot models (UR5, Franka, Unitree, etc.) |
| [xacro](https://github.com/ros/xacro) | 200 | Python | XML macro language for URDF |
| [robot_state_publisher](https://github.com/ros/robot_state_publisher) | 200 | C++ | Publishes robot transforms from URDF |

## 🛡️ Safety & Testing

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [CARLA ScenarioRunner](https://github.com/carla-simulator/scenario_runner) | 1k | Python | Autonomous driving test scenarios |
| [ROS 2 Launch Testing](https://github.com/ros2/launch) | 200 | Python | Integration testing for ROS 2 systems |
| [rosbag2](https://github.com/ros2/rosbag2) | 200 | C++ | Record and replay ROS 2 topic data |

## 🏗️ Hardware Platforms & Kits

| Platform | Type | Description |
|----------|------|-------------|
| [Open Manipulator](https://github.com/ROBOTIS-GIT/open_manipulator) | Arm | ROBOTIS robotic arm with ROS 2 support |
| [TurtleBot](https://github.com/ROBOTIS-GIT/turtlebot3) | Mobile | Standard ROS learning platform — affordable mobile robot |
| [Unitree Go2](https://github.com/unitreerobotics/unitree_ros2) | Quadruped | Affordable quadruped with ROS 2 SDK |
| [SO-100/SO-ARM](https://github.com/TheRobotStudio/SO-ARM100) | Arm | Low-cost robot arm for research and education |
| [Franka Emika](https://github.com/frankaemika/franka_ros2) | Arm | Research-grade 7-DoF arm with torque control |
| [Hello Robot Stretch](https://github.com/hello-robot/stretch_ros2) | Mobile Manipulator | Affordable mobile manipulator for home robotics |

## 📐 Kinematics & Calibration

> Also see: [Pinocchio](#-humanoid--legged-robots) in Humanoid & Legged.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Kalibr](https://github.com/ethz-asl/kalibr) | 4k | C++ | Multi-camera and camera-IMU calibration from ETH Zurich |
| [IKFast](https://github.com/rdiankov/openrave) | 1k | C++ | Analytical inverse kinematics solver (via OpenRAVE) ⚠️ |
| [ikpy](https://github.com/Phylliade/ikpy) | 600 | Python | Pure Python inverse kinematics — great for prototyping |
| [easy_handeye](https://github.com/IFL-CAMP/easy_handeye) | 600 | Python | Hand-eye calibration for robot arms |
| [KDL](https://github.com/orocos/orocos_kinematics_dynamics) | 300 | C++ | Orocos kinematics and dynamics for ROS |

## 🗣️ Human-Robot Interaction

> Also see: [ROS Bridge](#-ros--ros-2-ecosystem) for web/mobile robot control.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Gradio](https://github.com/gradio-app/gradio) | 37k | Python | Quick web UIs for robot demos and teleoperation |
| [SayCan](https://github.com/google-research/google-research/tree/master/saycan) | - | Python | Google's LLM-based robot task grounding |
| [RViz2](https://github.com/ros2/rviz) | 300 | C++ | 3D visualization for ROS 2 |

## 🕹️ Teleoperation & Digital Twins

VR teleoperation is the primary way to collect robot demonstration data.

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open TeleVision](https://github.com/OpenTeleVision/TeleVision) | 1k | Python | Immersive VR teleoperation for bimanual dexterous control |
| [UMI](https://github.com/real-stanford/universal_manipulation_interface) | 1k | Python | Stanford's manipulation interface for scalable data collection |
| [GELLO](https://github.com/wuphilipp/gello_software) | 500 | Python | Low-cost teleoperation with 3D-printed replicas |
| [Dexterous Teleop](https://github.com/dexsuite/dex-retargeting) | 400 | Python | Hand motion retargeting for dexterous robot teleop |
| [NVIDIA Omniverse](https://developer.nvidia.com/omniverse) | - | Python | Digital twin platform for robot sim and remote operation |

## 🐝 Multi-Robot & Swarm Systems

| Tool | Stars | Language | Description |
|------|-------|----------|-------------|
| [Open-RMF](https://github.com/open-rmf/rmf) | 1k | C++ | Robot Fleet Management for multi-robot coordination |
| [Crazyswarm2](https://github.com/IMRCLab/crazyswarm2) | 300 | Python | ROS 2 framework for Crazyflie nano-drone swarms |
| [ARGoS](https://github.com/ilpincy/argos3) | 200 | C++ | Multi-robot simulator — 10,000+ robots |
| [MAPF](https://github.com/Jiaoyang-Li/CBSH2-RTC) | 200 | C++ | Multi-Agent Path Finding with conflict-based search |
| [Buzz](https://github.com/MISTLab/Buzz) | 200 | C | Programming language for robot swarms |

## ☁️ Cloud Robotics Platforms

| Platform | Type | Description |
|----------|------|-------------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Cloud Sim | GPU-accelerated sim with synthetic data gen |
| [AWS RoboMaker](https://aws.amazon.com/robomaker/) | Cloud | ROS-based cloud robotics with simulation and fleet management |
| [Foxglove](https://foxglove.dev/) | SaaS | Cloud robot data visualization and analytics |
| [Formant](https://formant.io/) | SaaS | Fleet management, teleoperation, and observability |
| [Freedom Robotics](https://freedomrobotics.com/) | SaaS | Robot monitoring, control, and analytics |
| [InOrbit](https://www.inorbit.ai/) | SaaS | Robot operations with fleet management |

## 📦 Datasets & Benchmarks

| Dataset | Scale | Description |
|---------|-------|-------------|
| [Open X-Embodiment](https://github.com/google-deepmind/open_x_embodiment) | 1M+ episodes | DeepMind's cross-robot manipulation dataset from 22 labs |
| [DROID](https://github.com/droid-dataset/droid) | 76k demos | In-the-wild robot manipulation across 564 scenes |
| [BridgeData V2](https://github.com/rail-berkeley/bridge_data_v2) | 60k demos | Robot manipulation dataset from Berkeley |
| [RoboNet](https://github.com/SudeepDasari/RoboNet) | 15M frames | Multi-robot video for visual foresight |
| [CALVIN](https://github.com/mees/calvin) | - | Language-conditioned long-horizon manipulation benchmark |
| [RLBench](https://github.com/stepjam/RLBench) | 100 tasks | Benchmark for robot learning with vision |

## 🆓 Try Free

| Service | Free Tier | Try It |
|---------|-----------|--------|
| [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) | Free for developers | [Get started](https://developer.nvidia.com/isaac-sim) |
| [Foxglove](https://foxglove.dev/) | Free for individuals, 1GB data | [Start free](https://foxglove.dev/) |
| [Gazebo Sim](https://gazebosim.org/) | Fully open source | [Download](https://gazebosim.org/) |
| [MuJoCo](https://mujoco.org/) | Fully open source (since 2022) | [Download](https://mujoco.org/) |
| [Webots](https://cyberbotics.com/) | Fully open source | [Download](https://cyberbotics.com/) |
| [CARLA](https://carla.org/) | Fully open source | [Download](https://carla.org/) |

## 🪦 Deprecated Tools Graveyard

| Dead Tool | Why | Use Instead |
|-----------|-----|-------------|
| ROS 1 (Noetic) | EOL May 2025 | ROS 2 (Humble/Jazzy/Rolling) |
| Gazebo Classic | End of life | Gazebo Sim (gz-sim) |
| OpenAI Gym | Deprecated | Gymnasium (Farama Foundation) |
| AirSim | Archived by Microsoft Jan 2024 | CARLA, Isaac Sim, Gazebo |
| OpenRAVE | Unmaintained since 2022 | MoveIt 2, Drake |
| PyRobot | Meta archived, last update 2021 | LeRobot, ROS 2 |
| V-REP | Renamed | CoppeliaSim |
| Stage (2D sim) | Unmaintained since 2019 | Gazebo |
| Player/Stage | Unmaintained since 2016 | ROS 2 + Gazebo |

---

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

- Add tools you've actually used or evaluated
- Include star count and language where applicable
- Note if a tool is unmaintained (last commit >1 year ago)
- Commercial tools/services are fine but must be clearly labeled
