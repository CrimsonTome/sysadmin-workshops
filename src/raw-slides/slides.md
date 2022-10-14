# Sysadmin Workshop Slides

A series of workshops by CrimsonTome
Website: [crimsontome.com](https://crimsontome.com) \newline
Github: [CrimsonTome](https://github.com/crimsontome)\newline
Discord: CrimsonTome427#7459\newline
Email: <crimsontome427@protonmail.com>

\pagebreak

# Installing Fedora Server

The first workshop will be installing Fedora Server. This is what we use at Freeside on our VMs, as well as it's counterpart Fedora Workstation on the desktops.
Firstly you will need to setup a virtual machine of the OS, I used Gnome Boxes but you can use whatever you like, for example VMware Workstation, virt-manager or even something like Proxmox Virtual Environment. It doesn't matter for the most part how it is set up, it doesn't need a lot of RAM, aside from the installer you wont be greeted with a graphical user interface.
This can be worrying for some, but hopefully through these workshops you will become more familiar with the commandline. If you're already familiar, I hope you can learn something new. Some of these workshops will assume a basic knowledge of the Linux CLI but if you have any issues or are a complete beginner, just ask away as the point of this is to learn.

- Download a Fedora Server ISO file from [Fedora's Website](https://getfedora.org/en/server/download/) - if you're not sure which one to choose, pick the top x86_64 standard image.
- Open up your VM software of choice.
- Create a new virtual machine and choose the newly downloaded image.
- Once you get to the installation page, complete the needed sections.
  - System
    - Click on Installation Destination then click done, there is no need to do manual partitioning in this case.
  -  User Settings
     - Click on Root Account and tick either disable or enable, doesn't matter which. Note that if you wish to SSH as root later, you will have to set this up manually.
     - Click Create User and fill in the details, ticking make this user administrator. There is no need to do any advanced options.
- Once you are ready, click on Begin Installation. Depdending on the specs of the VM and your network, this could take a while so be patient.
- Reboot the VM.
- Once the VM has booted, login with the username and password you set during the installation process to verify the install has worked


\pagebreak

# Setting up SSH server

- To check that the SSH server is running, run `sudo systemctl status sshd`

If the above commands looked confusing, let's go through what each one does. Firstly `sudo systemctl status sshd`:\newline
- `sudo` allows us to run commands as another user, in this case `root` - the superuser, equivalent of an Administrator account on Windows\newline
- `systemctl` is used to control the systemd system and service manager. Systemd is a very common init system and its primary purpose is initializing, managing and tracking system services and daemons in the OS (in this case Fedora), both during startup and while the system is running.\newline
- `status` is used to view the status of a service\newline
- `sshd` is the Secure Shell Daemon, SSH allows machines to securely connect to each other\newline
 \pagebreak

 # References

<https://fedoramagazine.org/what-is-an-init-system/>

<https://explainshell.com/>

<https://tldr.sh/>
