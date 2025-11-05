// Cybersecurity Learning Roadmap Application

// Phase Data
const phasesData = [
  {
    id: 'phase1',
    name: 'Foundations',
    weeks: '1-8',
    color: '#2196F3',
    icon: '🖥️',
    className: 'phase-foundations',
    description: 'Master hardware, OS, networking basics, Linux, and Python fundamentals',
    twoWeekSections: [
      {
        weeks: '1-2',
        title: 'Computer Hardware & OS Basics',
        topics: [
          'Hardware components (CPU, RAM, storage)',
          'Operating system installation and boot process',
          'File systems and partitioning'
        ],
        resources: [
          { name: 'Linux Journey', link: 'https://linuxjourney.com', time: '4-6 hrs' },
          { name: 'NetworkChuck YouTube - Linux Basics', link: 'https://www.youtube.com/c/NetworkChuck', time: '8-10 hrs' }
        ],
        labs: [
          'VirtualBox Kali Linux setup',
          'Dual-boot Windows/Linux configuration'
        ],
        milestone: '✓ CLI navigation proficiency, successful OS installation'
      },
      {
        weeks: '3-4',
        title: 'Networking Fundamentals',
        topics: [
          'OSI Model (all 7 layers)',
          'TCP/IP protocol suite',
          'IP addressing and CIDR notation',
          'Ports and services'
        ],
        resources: [
          { name: 'Professor Messer Network+', link: 'https://www.professormesser.com/get-n10-009-network-plus-certified/', time: '12-15 hrs' },
          { name: 'TryHackMe Pre-Security', link: 'https://tryhackme.com/path/outline/presecurity', time: '10-12 hrs' }
        ],
        labs: [
          'Packet analysis with Wireshark',
          'Network topology mapping'
        ],
        milestone: '✓ Subnetting calculations, port identification, OSI model mastery'
      },
      {
        weeks: '5-6',
        title: 'Linux Deep Dive',
        topics: [
          'File permissions (chmod, chown)',
          'User and group management',
          'Bash scripting fundamentals',
          'Process management and systemd'
        ],
        resources: [
          { name: 'OverTheWire Bandit', link: 'https://overthewire.org/wargames/bandit', time: '12-15 hrs' },
          { name: 'GNU Bash Manual', link: 'https://www.gnu.org/software/bash/manual/', time: '8-10 hrs' }
        ],
        labs: [
          'Bash shell scripting projects',
          'Permission and user management labs'
        ],
        milestone: '✓ Bandit Level 20+, shell script automation'
      },
      {
        weeks: '7-8',
        title: 'Python Basics',
        topics: [
          'Variables, loops, and conditional logic',
          'Functions and modules',
          'File I/O and data structures',
          'Libraries: requests, socket, scapy'
        ],
        resources: [
          { name: 'Automate the Boring Stuff with Python', link: 'https://automatetheboringstuff.com', time: '15-18 hrs' },
          { name: 'Python Official Tutorial', link: 'https://docs.python.org/3/tutorial/', time: '8-10 hrs' }
        ],
        labs: [
          'Port scanner script development',
          'Log file parser script'
        ],
        milestone: '✓ Working port scanner, log parser, basic socket programming'
      }
    ],
    sideBranch: 'Sunday 4-5 hr Deep Dives: Home lab setup (VirtualBox VMs, network configuration)'
  },
  {
    id: 'phase2',
    name: 'Core Security Concepts',
    weeks: '9-16',
    color: '#4CAF50',
    icon: '🔒',
    className: 'phase-core',
    description: 'Learn security fundamentals, web security, reconnaissance, and vulnerability analysis',
    twoWeekSections: [
      {
        weeks: '9-10',
        title: 'Security Fundamentals',
        topics: [
          'CIA Triad (Confidentiality, Integrity, Availability)',
          'Cryptography basics (symmetric, asymmetric)',
          'Hashing and digital signatures',
          'Common security threats and attacks'
        ],
        resources: [
          { name: 'Professor Messer Security+ Playlist', link: 'https://www.professormesser.com/security-plus/', time: '15-18 hrs' },
          { name: 'TryHackMe Intro to Cybersecurity', link: 'https://tryhackme.com/module/introduction-to-cyber-security', time: '12-14 hrs' }
        ],
        labs: [
          'Hash cracking with Hashcat',
          'Encryption and decryption exercises'
        ],
        milestone: '✓ Hash cracking proficiency, crypto fundamentals, security triad application'
      },
      {
        weeks: '11-12',
        title: 'Web Security & OWASP Top 10',
        topics: [
          'SQL Injection (SQLi) attacks and prevention',
          'Cross-Site Scripting (XSS)',
          'CSRF attacks',
          'Authentication and session management'
        ],
        resources: [
          { name: 'PortSwigger Web Security Academy', link: 'https://portswigger.net/web-security', time: '20-25 hrs' },
          { name: 'bWAPP vulnerable web app', link: 'http://www.itsecgames.com', time: '10-12 hrs' }
        ],
        labs: [
          'OWASP Top 10 labs in bWAPP',
          'SQL injection exploitation'
        ],
        milestone: '✓ 10+ PortSwigger labs completed, SQLi and XSS exploitation'
      },
      {
        weeks: '13-14',
        title: 'Reconnaissance & Scanning',
        topics: [
          'OSINT (Open Source Intelligence) techniques',
          'Nmap scanning and enumeration',
          'Service identification',
          'Information gathering methodology'
        ],
        resources: [
          { name: 'Nmap Official Documentation', link: 'https://nmap.org/docs.html', time: '8-10 hrs' },
          { name: 'TryHackMe Nmap rooms', link: 'https://tryhackme.com/hacktivities/search?&page=1&kind=rooms&searchText=nmap', time: '12-14 hrs' }
        ],
        labs: [
          'Comprehensive network scans',
          'OSINT enumeration projects'
        ],
        milestone: '✓ Full reconnaissance report, Nmap script writing, service enumeration'
      },
      {
        weeks: '15-16',
        title: 'Vulnerability Analysis',
        topics: [
          'CVE (Common Vulnerabilities and Exposures) databases',
          'Metasploit framework fundamentals',
          'Vulnerability assessment tools',
          'Exploit chains'
        ],
        resources: [
          { name: 'Metasploit Unleashed (Free)', link: 'https://www.offensive-security.com/metasploit-unleashed/', time: '15-18 hrs' },
          { name: 'Metasploitable2 Environment', link: 'https://sourceforge.net/projects/metasploitable/files/', time: '12-14 hrs' }
        ],
        labs: [
          'Metasploitable2 exploitation',
          'Exploit chain execution'
        ],
        milestone: '✓ CVE identification, exploit chain execution, Metasploit modules'
      }
    ],
    sideBranch: 'Weekly 2-3 hr Hands-On: Wireshark packet analysis, network traffic investigation'
  },
  {
    id: 'phase3',
    name: 'Advanced Security Skills',
    weeks: '17-24',
    color: '#FF9800',
    icon: '🛡️',
    className: 'phase-advanced',
    description: 'Master advanced testing, exploitation, defense, and forensics',
    twoWeekSections: [
      {
        weeks: '17-18',
        title: 'Web Application Testing',
        topics: [
          'Burp Suite Community Edition mastery',
          'Request/response manipulation',
          'Authentication and session testing',
          'API security testing'
        ],
        resources: [
          { name: 'PortSwigger Burp Suite Tutorial', link: 'https://portswigger.net/burp/documentation', time: '18-22 hrs' },
          { name: 'PortSwigger Academy Labs (20+)', link: 'https://portswigger.net/web-security/all-labs', time: '25-30 hrs' }
        ],
        labs: [
          '20+ PortSwigger Academy labs',
          'Web application penetration tests'
        ],
        milestone: '✓ Burp Suite certification path, comprehensive web app testing'
      },
      {
        weeks: '19-20',
        title: 'Privilege Escalation',
        topics: [
          'Linux privilege escalation techniques',
          'Windows privilege escalation techniques',
          'Kernel exploits and misconfigurations',
          'SUID/SGID and capability exploitation'
        ],
        resources: [
          { name: 'GTFOBins - Linux Privesc Database', link: 'https://gtfobins.github.io', time: '10-12 hrs' },
          { name: 'TryHackMe Privilege Escalation', link: 'https://tryhackme.com/module/privilege-escalation', time: '18-22 hrs' }
        ],
        labs: [
          'TryHackMe PrivEsc rooms',
          'VM privilege escalation scenarios'
        ],
        milestone: '✓ Successful escalation on 5+ Linux/Windows VMs, exploit discovery'
      },
      {
        weeks: '21-22',
        title: 'Network Security & Defense',
        topics: [
          'Intrusion Detection Systems (IDS/IPS)',
          'Snort and Suricata rules',
          'Network segmentation',
          'Firewall configuration'
        ],
        resources: [
          { name: 'Snort Official Documentation', link: 'https://www.snort.org/documents', time: '12-15 hrs' },
          { name: 'Home Snort Setup Project', link: 'https://www.snort.org', time: '15-18 hrs' }
        ],
        labs: [
          'Home Snort IDS setup',
          'PCAP analysis and detection rule writing'
        ],
        milestone: '✓ Detect attacks in PCAP files, write custom Snort rules'
      },
      {
        weeks: '23-24',
        title: 'Incident Response & Forensics',
        topics: [
          'Incident response process and procedures',
          'Digital forensics tools (Autopsy, volatility)',
          'Memory forensics and analysis',
          'Log analysis for incident investigation'
        ],
        resources: [
          { name: 'Autopsy Digital Forensics', link: 'https://www.autopsy.com', time: '14-16 hrs' },
          { name: 'TryHackMe Forensics path', link: 'https://tryhackme.com/hacktivities/search?&page=1&kind=modules&searchText=forensics', time: '16-18 hrs' }
        ],
        labs: [
          'TryHackMe forensics challenges',
          'Memory dump analysis projects'
        ],
        milestone: '✓ Memory dump analysis, incident timeline reconstruction'
      }
    ],
    sideBranch: 'Study Load: Increase to 3-4 hrs/day due to complexity. Weekend labs recommended.'
  },
  {
    id: 'phase4',
    name: 'Specialization & Real-World Practice',
    weeks: '25-32',
    color: '#9C27B0',
    icon: '💼',
    className: 'phase-specialization',
    description: 'Real-world scenarios, specialization paths, and CTF mastery',
    twoWeekSections: [
      {
        weeks: '25-26',
        title: 'Active Directory & Windows Security',
        topics: [
          'Active Directory fundamentals',
          'Kerberos authentication protocol',
          'BloodHound enumeration tool',
          'AD attack vectors and defenses'
        ],
        resources: [
          { name: 'TryHackMe Active Directory', link: 'https://tryhackme.com/hacktivities/search?&page=1&kind=rooms&searchText=active%20directory', time: '16-18 hrs' },
          { name: 'BloodHound Official Docs', link: 'https://bloodhound.specterops.io/get-started/introduction', time: '12-14 hrs' }
        ],
        labs: [
          'AD lab compromise scenarios',
          'Kerberoasting attacks'
        ],
        milestone: '✓ Kerberoasting execution, AD privilege chain exploitation'
      },
      {
        weeks: '27-28',
        title: 'Cloud Security Basics',
        topics: [
          'AWS IAM policies and roles',
          'S3 bucket enumeration and misconfigurations',
          'Cloud security best practices',
          'Azure and GCP basics'
        ],
        resources: [
          { name: 'AWS Free Tier Labs', link: 'https://aws.amazon.com/free', time: '18-20 hrs' },
          { name: 'CloudGoat - Intentional Vulnerable AWS', link: 'https://github.com/rhinosecuritylabs/cloudgoat', time: '14-16 hrs' }
        ],
        labs: [
          'S3 enumeration exercises',
          'IAM misconfiguration identification'
        ],
        milestone: '✓ S3 misconfig identification, cloud security assessments'
      },
      {
        weeks: '29-30',
        title: 'Penetration Testing Methodology',
        topics: [
          'PTES (Penetration Testing Execution Standard)',
          'Report writing and findings documentation',
          'Remediation recommendations',
          'Client communication and engagement rules'
        ],
        resources: [
          { name: 'TryHackMe Junior Pentester Path', link: 'https://tryhackme.com/path/outline/jrpenetrationtester', time: '20-24 hrs' },
          { name: 'PTES Framework', link: 'http://www.pentest-standard.org', time: '8-10 hrs' }
        ],
        labs: [
          'Full penetration test simulations',
          'Report writing projects'
        ],
        milestone: '✓ Professional pentest report, end-to-end engagement simulation'
      },
      {
        weeks: '31-32',
        title: 'CTF Practice & Frameworks',
        topics: [
          'Capture The Flag competition strategies',
          'MITRE ATT&CK framework',
          'Threat modeling with ATT&CK',
          'CTF tool integration'
        ],
        resources: [
          { name: 'picoCTF - Educational CTF', link: 'https://picoctf.org', time: '20-25 hrs' },
          { name: 'MITRE ATT&CK Framework', link: 'https://attack.mitre.org', time: '12-14 hrs' }
        ],
        labs: [
          '10+ CTF challenges',
          'ATT&CK mapping exercises'
        ],
        milestone: '✓ ATT&CK mapping mastery, CTF competition participation'
      }
    ],
    sideBranch: 'Study Load: 3-4 hrs/day minimum. CTF weekends strongly recommended. Real-world scenarios emphasized.'
  },
  {
    id: 'phase5',
    name: 'Certification & Job Readiness',
    weeks: '33-40',
    color: '#F44336',
    icon: '📜',
    className: 'phase-certification',
    description: 'Prepare for certification, portfolio building, and job placement',
    twoWeekSections: [
      {
        weeks: '33-36',
        title: 'CompTIA Security+ Preparation',
        topics: [
          'All Security+ exam domains',
          'Risk management and compliance',
          'Cryptography and PKI',
          'Identity and access management',
          'Network security'
        ],
        resources: [
          { name: 'Professor Messer Security+ Videos', link: 'https://www.professormesser.com/security-plus/', time: '25-30 hrs' },
          { name: 'Jason Dion Practice Exams', link: 'https://www.udemy.com/course/securityplus/', time: '20-25 hrs' }
        ],
        labs: [
          'Multiple practice tests (85%+ target)',
          'Domain-specific labs'
        ],
        milestone: '✓ Pass CompTIA Security+ exam (SY0-701)'
      },
      {
        weeks: '37-38',
        title: 'Advanced Hands-On Practice',
        topics: [
          'HackTheBox machine exploitation',
          'Complex real-world scenarios',
          'Advanced privilege escalation',
          'Post-exploitation techniques'
        ],
        resources: [
          { name: 'HackTheBox Platform', link: 'https://www.hackthebox.com', time: '25-30 hrs' },
          { name: 'IppSec Walkthroughs - YouTube', link: 'https://www.youtube.com/c/IppSec', time: '15-18 hrs' }
        ],
        labs: [
          '10+ HackTheBox machines',
          'Root 5 insane-rated boxes'
        ],
        milestone: '✓ Root 5 HTB boxes, complete machine exploitation chains'
      },
      {
        weeks: '39-40',
        title: 'Portfolio & Job Preparation',
        topics: [
          'Resume optimization and ATS passing',
          'GitHub portfolio development',
          'LinkedIn profile building',
          'Interview preparation and technical discussions'
        ],
        resources: [
          { name: 'LinkedIn Networking & Profile', link: 'https://www.linkedin.com', time: '10-12 hrs' },
          { name: 'Pramp - Mock Interviews', link: 'https://www.pramp.com', time: '12-15 hrs' }
        ],
        labs: [
          'GitHub portfolio projects (3-5 security tools)',
          'Mock technical interviews'
        ],
        milestone: '✓ 20+ job applications, 5+ interviews scheduled'
      }
    ],
    sideBranch: 'Daily Job Search: 30 min/day for applications and networking. Interview prep 3-4x/week.'
  }
];

// ==================== PERSISTENCE FUNCTIONS ====================

// Save all progress to localStorage
function saveProgressToStorage() {
    try {
        const progressData = {
            completedSubTopics: state.completedSubTopics,
            expandedProgressPhases: state.expandedProgressPhases,
            startDate: state.startDate.toISOString(),
            darkMode: state.darkMode
        };
        localStorage.setItem('cyberRoadmapProgress', JSON.stringify(progressData));
        console.log('Progress saved to localStorage');
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

// Load progress from localStorage
function loadProgressFromStorage() {
    try {
        const saved = localStorage.getItem('cyberRoadmapProgress');
        if (saved) {
            const progressData = JSON.parse(saved);
            state.completedSubTopics = progressData.completedSubTopics || {};
            state.expandedProgressPhases = progressData.expandedProgressPhases || [];
            if (progressData.startDate) {
                state.startDate = new Date(progressData.startDate);
            }
            if (progressData.darkMode !== undefined) {
                state.darkMode = progressData.darkMode;
            }
            console.log('Progress loaded from localStorage');
            return true;
        }
    } catch (e) {
        console.error('Failed to load progress:', e);
    }
    return false;
}

// Apply loaded progress to UI
function applyLoadedProgress() {
    // Restore checkbox states
    phasesData.forEach(phase => {
        if (state.completedSubTopics[phase.id]) {
            state.completedSubTopics[phase.id].forEach(sectionIndex => {
                const checkbox = document.querySelector(`.progress-checkbox-child[data-phase-id="${phase.id}"][data-section-index="${sectionIndex}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
            
            // Update parent checkbox if all completed
            const allCompleted = state.completedSubTopics[phase.id].length === phase.twoWeekSections.length;
            const parentCheckbox = document.querySelector(`.progress-checkbox-parent[data-phase-id="${phase.id}"]`);
            if (parentCheckbox && allCompleted) {
                parentCheckbox.checked = true;
            }
            
            updateProgressCount(phase.id);
        }
    });
    
    // Restore expanded states
    state.expandedProgressPhases.forEach(phaseId => {
        const progressItem = document.querySelector(`.progress-item[data-phase-id="${phaseId}"]`);
        const arrow = progressItem?.querySelector('.progress-expand-arrow');
        if (progressItem) {
            progressItem.classList.add('expanded');
            if (arrow) arrow.textContent = '▼';
        }
    });
    
    // Restore start date
    const startDatePicker = document.getElementById('startDatePicker');
    if (startDatePicker && state.startDate) {
        const dateString = state.startDate.toISOString().split('T')[0];
        startDatePicker.value = dateString;
    }
    
    // Restore dark mode
    if (state.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    updateOverallProgress();
    updateTimeline();
    updateDarkModeButton();
}

// ==================== END PERSISTENCE FUNCTIONS ====================

// State Management
const state = {
  zoom: 1,
  completedPhases: [],
  completedSubTopics: {},
  expandedProgressPhases: [],
  startDate: new Date('2025-11-04'),
  totalWeeks: 40,
  darkMode: false
};

// Initialize Application
// Initialize Application
function init() {
    // Load saved progress BEFORE rendering
    loadProgressFromStorage();
    
    renderPhases();
    renderProgressTracker();
    renderTimeline();
    setupEventListeners();
    
    // Apply loaded progress AFTER rendering
    applyLoadedProgress();
    
    updateTimeline();
    initDarkMode();
}


// Render Phases
function renderPhases() {
  const container = document.getElementById('phasesContainer');
  
  phasesData.forEach((phase, index) => {
    // Create phase wrapper
    const phaseWrapper = document.createElement('div');
    phaseWrapper.className = 'phase-wrapper';
    phaseWrapper.setAttribute('data-phase-id', phase.id);
    
    // Create phase node
    const phaseNode = document.createElement('div');
    phaseNode.className = `phase-node ${phase.className}`;
    phaseNode.setAttribute('data-phase-id', phase.id);
    
    // Phase header
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'phase-header';
    
    const titleSection = document.createElement('div');
    titleSection.className = 'phase-title-section';
    
    const icon = document.createElement('div');
    icon.className = 'phase-icon';
    icon.textContent = phase.icon;
    
    const titleContainer = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'phase-title';
    title.textContent = phase.name;
    
    const weeks = document.createElement('div');
    weeks.className = 'phase-weeks';
    weeks.textContent = `Weeks ${phase.weeks}`;
    
    titleContainer.appendChild(title);
    titleContainer.appendChild(weeks);
    
    titleSection.appendChild(icon);
    titleSection.appendChild(titleContainer);
    
    const expandIndicator = document.createElement('div');
    expandIndicator.className = 'expand-indicator';
    expandIndicator.textContent = '▼';
    
    phaseHeader.appendChild(titleSection);
    phaseHeader.appendChild(expandIndicator);
    
    // Phase description
    const description = document.createElement('div');
    description.className = 'phase-description';
    description.textContent = phase.description;
    
    // Phase details
    const details = document.createElement('div');
    details.className = 'phase-details';
    
    // Two-week sections
    phase.twoWeekSections.forEach(section => {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'two-week-section';
      
      // Section header
      const sectionHeader = document.createElement('div');
      sectionHeader.className = 'section-header';
      
      const sectionWeeks = document.createElement('div');
      sectionWeeks.className = 'section-weeks';
      sectionWeeks.textContent = `Weeks ${section.weeks}`;
      
      const sectionTitle = document.createElement('div');
      sectionTitle.className = 'section-title';
      sectionTitle.textContent = section.title;
      
      sectionHeader.appendChild(sectionWeeks);
      sectionHeader.appendChild(sectionTitle);
      
      // Section content
      const sectionContent = document.createElement('div');
      sectionContent.className = 'section-content';
      
      // Topics
      if (section.topics && section.topics.length > 0) {
        const topicsBlock = document.createElement('div');
        topicsBlock.className = 'content-block';
        const topicsTitle = document.createElement('h4');
        topicsTitle.textContent = '📚 Topics';
        const topicsList = document.createElement('ul');
        section.topics.forEach(topic => {
          const li = document.createElement('li');
          li.textContent = topic;
          topicsList.appendChild(li);
        });
        topicsBlock.appendChild(topicsTitle);
        topicsBlock.appendChild(topicsList);
        sectionContent.appendChild(topicsBlock);
      }
      
      // Resources
      if (section.resources && section.resources.length > 0) {
        const resourcesBlock = document.createElement('div');
        resourcesBlock.className = 'content-block';
        const resourcesTitle = document.createElement('h4');
        resourcesTitle.textContent = '🔗 Resources';
        const resourcesContainer = document.createElement('div');
        section.resources.forEach(resource => {
          const resourceItem = document.createElement('div');
          resourceItem.className = 'resource-item';
          const link = document.createElement('a');
          link.href = resource.link;
          link.className = 'resource-link';
          link.textContent = resource.name;
          link.target = '_blank';
          const time = document.createElement('span');
          time.className = 'resource-time';
          time.textContent = `(${resource.time})`;
          resourceItem.appendChild(link);
          resourceItem.appendChild(time);
          resourcesContainer.appendChild(resourceItem);
        });
        resourcesBlock.appendChild(resourcesTitle);
        resourcesBlock.appendChild(resourcesContainer);
        sectionContent.appendChild(resourcesBlock);
      }
      
      // Labs
      if (section.labs && section.labs.length > 0) {
        const labsBlock = document.createElement('div');
        labsBlock.className = 'content-block';
        const labsTitle = document.createElement('h4');
        labsTitle.textContent = '🧪 Practice Labs';
        const labsList = document.createElement('ul');
        section.labs.forEach(lab => {
          const li = document.createElement('li');
          li.textContent = lab;
          labsList.appendChild(li);
        });
        labsBlock.appendChild(labsTitle);
        labsBlock.appendChild(labsList);
        sectionContent.appendChild(labsBlock);
      }
      
      // Milestone
      if (section.milestone) {
        const milestoneDiv = document.createElement('div');
        milestoneDiv.className = 'milestone';
        milestoneDiv.textContent = `🎯 Milestone: ${section.milestone}`;
        sectionContent.appendChild(milestoneDiv);
      }
      
      sectionDiv.appendChild(sectionHeader);
      sectionDiv.appendChild(sectionContent);
      details.appendChild(sectionDiv);
    });
    
    // Side branch
    if (phase.sideBranch) {
      const sideBranch = document.createElement('div');
      sideBranch.className = 'side-branch';
      sideBranch.textContent = phase.sideBranch;
      details.appendChild(sideBranch);
    }
    
    phaseNode.appendChild(phaseHeader);
    phaseNode.appendChild(description);
    phaseNode.appendChild(details);
    
    // Click event for expand/collapse
    phaseHeader.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePhase(phase.id);
    });
    
    // Tooltip
    phaseNode.addEventListener('mouseenter', (e) => showTooltip(e, phase));
    phaseNode.addEventListener('mouseleave', hideTooltip);
    
    phaseWrapper.appendChild(phaseNode);
    container.appendChild(phaseWrapper);
    
    // Add arrow after each phase except the last
    if (index < phasesData.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'arrow-connector';
      arrow.textContent = '↓';
      container.appendChild(arrow);
    }
  });
}

// Toggle Phase Expand/Collapse
function togglePhase(phaseId) {
  const phaseNode = document.querySelector(`.phase-node[data-phase-id="${phaseId}"]`);
  if (phaseNode) {
    phaseNode.classList.toggle('expanded');
    console.log('Toggled phase:', phaseId, 'Expanded:', phaseNode.classList.contains('expanded'));
  } else {
    console.error('Phase node not found:', phaseId);
  }
}

// Expand/Collapse All Phases
function expandAllPhases() {
  document.querySelectorAll('.phase-node').forEach(node => {
    node.classList.add('expanded');
  });
}

function collapseAllPhases() {
  document.querySelectorAll('.phase-node').forEach(node => {
    node.classList.remove('expanded');
  });
}

// Tooltip Functions
function showTooltip(event, phase) {
  const tooltip = document.getElementById('tooltip');
  tooltip.textContent = `${phase.name} (Weeks ${phase.weeks}): ${phase.description}`;
  tooltip.classList.add('visible');
  positionTooltip(event);
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.remove('visible');
}

function positionTooltip(event) {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.left = event.pageX + 15 + 'px';
  tooltip.style.top = event.pageY + 15 + 'px';
}

// Search Functionality
function handleSearch(query) {
  // Remove previous highlights
  document.querySelectorAll('.highlight').forEach(el => {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
  
  if (!query) return;
  
  const searchTerm = query.toLowerCase();
  let foundMatch = false;
  
  // Search through all text content
  document.querySelectorAll('.two-week-section, .phase-description').forEach(element => {
    const text = element.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      foundMatch = true;
      highlightText(element, query);
      
      // DO NOT expand the parent phase - let user manually expand
    }
  });
}

function highlightText(element, query) {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const nodesToReplace = [];
  let node;
  
  while (node = walker.nextNode()) {
    if (node.textContent.toLowerCase().includes(query.toLowerCase())) {
      nodesToReplace.push(node);
    }
  }
  
  nodesToReplace.forEach(node => {
    const parent = node.parentNode;
    const text = node.textContent;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    const fragment = document.createDocumentFragment();
    parts.forEach(part => {
      if (part.toLowerCase() === query.toLowerCase()) {
        const span = document.createElement('span');
        span.className = 'highlight';
        span.textContent = part;
        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });
    
    parent.replaceChild(fragment, node);
  });
}

// Zoom Functions
function zoomIn() {
  state.zoom = Math.min(state.zoom + 0.1, 2);
  applyTransform();
}

function zoomOut() {
  state.zoom = Math.max(state.zoom - 0.1, 0.5);
  applyTransform();
}

function resetView() {
  state.zoom = 1;
  applyTransform();
}

function applyTransform() {
  const content = document.getElementById('roadmapContent');
  content.style.transform = `scale(${state.zoom})`;
}

// Pan Functions - REMOVED (user request to disable drag functionality)

// Progress Tracker
function renderProgressTracker() {
  const progressGrid = document.getElementById('progressGrid');
  
  phasesData.forEach((phase, phaseIndex) => {
    const progressItem = document.createElement('div');
    progressItem.className = 'progress-item';
    progressItem.setAttribute('data-phase-id', phase.id);
    progressItem.setAttribute('data-phase-index', phaseIndex);
    
    const header = document.createElement('div');
    header.className = 'progress-item-header';
    
    // Expand/collapse arrow
    const expandArrow = document.createElement('span');
    expandArrow.className = 'progress-expand-arrow';
    expandArrow.textContent = '▶';
    expandArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleProgressPhase(phase.id);
    });
    
    // Phase checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'progress-checkbox progress-checkbox-parent';
    checkbox.setAttribute('data-phase-id', phase.id);
    checkbox.style.accentColor = phase.color;
    checkbox.addEventListener('change', (e) => updatePhaseProgress(phase.id, e.target.checked));
    
    // Phase title
    const titleContainer = document.createElement('div');
    titleContainer.className = 'progress-item-title-container';
    
    const title = document.createElement('div');
    title.className = 'progress-item-title';
    title.textContent = phase.name;
    
    const progressCount = document.createElement('span');
    progressCount.className = 'progress-count';
    progressCount.setAttribute('data-phase-id', phase.id);
    progressCount.textContent = `0/${phase.twoWeekSections.length}`;
    
    titleContainer.appendChild(title);
    titleContainer.appendChild(progressCount);
    
    header.appendChild(expandArrow);
    header.appendChild(checkbox);
    header.appendChild(titleContainer);
    
    // Sub-topics container
    const subTopicsContainer = document.createElement('div');
    subTopicsContainer.className = 'progress-subtopics';
    subTopicsContainer.setAttribute('data-phase-id', phase.id);
    
    phase.twoWeekSections.forEach((section, sectionIndex) => {
      const subTopicItem = document.createElement('div');
      subTopicItem.className = 'progress-subtopic-item';
      
      const subCheckbox = document.createElement('input');
      subCheckbox.type = 'checkbox';
      subCheckbox.className = 'progress-checkbox progress-checkbox-child';
      subCheckbox.setAttribute('data-phase-id', phase.id);
      subCheckbox.setAttribute('data-section-index', sectionIndex);
      subCheckbox.style.accentColor = phase.color;
      subCheckbox.addEventListener('change', (e) => updateSubTopicProgress(phase.id, sectionIndex, e.target.checked));
      
      const subTitle = document.createElement('div');
      subTitle.className = 'progress-subtopic-title';
      subTitle.innerHTML = `${section.title} <span class="progress-subtopic-weeks">(Weeks ${section.weeks})</span>`;
      
      subTopicItem.appendChild(subCheckbox);
      subTopicItem.appendChild(subTitle);
      subTopicsContainer.appendChild(subTopicItem);
    });
    
    progressItem.appendChild(header);
    progressItem.appendChild(subTopicsContainer);
    progressGrid.appendChild(progressItem);
    
    // Initialize state for this phase
    if (!state.completedSubTopics[phase.id]) {
      state.completedSubTopics[phase.id] = [];
    }
  });
}

function toggleProgressPhase(phaseId) {
  const progressItem = document.querySelector(`.progress-item[data-phase-id="${phaseId}"]`);
  const subTopicsContainer = document.querySelector(`.progress-subtopics[data-phase-id="${phaseId}"]`);
  const arrow = progressItem.querySelector('.progress-expand-arrow');
  
  const isExpanded = state.expandedProgressPhases.includes(phaseId);
  
  if (isExpanded) {
    state.expandedProgressPhases = state.expandedProgressPhases.filter(id => id !== phaseId);
    progressItem.classList.remove('expanded');
    arrow.textContent = '▶';
  } else {
    state.expandedProgressPhases.push(phaseId);
    progressItem.classList.add('expanded');
    arrow.textContent = '▼';
  }
  saveProgressToStorage();
}

function updatePhaseProgress(phaseId, isCompleted) {
  const phase = phasesData.find(p => p.id === phaseId);
  
  if (isCompleted) {
    // Check all sub-topics
    state.completedSubTopics[phaseId] = phase.twoWeekSections.map((_, index) => index);
    phase.twoWeekSections.forEach((_, index) => {
      const subCheckbox = document.querySelector(`.progress-checkbox-child[data-phase-id="${phaseId}"][data-section-index="${index}"]`);
      if (subCheckbox) subCheckbox.checked = true;
    });
  } else {
    // Uncheck all sub-topics
    state.completedSubTopics[phaseId] = [];
    phase.twoWeekSections.forEach((_, index) => {
      const subCheckbox = document.querySelector(`.progress-checkbox-child[data-phase-id="${phaseId}"][data-section-index="${index}"]`);
      if (subCheckbox) subCheckbox.checked = false;
    });
  }
  
  updateProgressCount(phaseId);
  updateOverallProgress();
  saveProgressToStorage();
}

function updateSubTopicProgress(phaseId, sectionIndex, isCompleted) {
  if (!state.completedSubTopics[phaseId]) {
    state.completedSubTopics[phaseId] = [];
  }
  
  if (isCompleted) {
    if (!state.completedSubTopics[phaseId].includes(sectionIndex)) {
      state.completedSubTopics[phaseId].push(sectionIndex);
    }
  } else {
    state.completedSubTopics[phaseId] = state.completedSubTopics[phaseId].filter(i => i !== sectionIndex);
  }
  
  updateProgressCount(phaseId);
  
  // Auto-check parent if all sub-topics are completed
  const phase = phasesData.find(p => p.id === phaseId);
  const parentCheckbox = document.querySelector(`.progress-checkbox-parent[data-phase-id="${phaseId}"]`);
  if (state.completedSubTopics[phaseId].length === phase.twoWeekSections.length) {
    parentCheckbox.checked = true;
  } else {
    parentCheckbox.checked = false;
  }
  
  updateOverallProgress();
  saveProgressToStorage();
}

function updateProgressCount(phaseId) {
  const phase = phasesData.find(p => p.id === phaseId);
  const progressCount = document.querySelector(`.progress-count[data-phase-id="${phaseId}"]`);
  const completed = state.completedSubTopics[phaseId] ? state.completedSubTopics[phaseId].length : 0;
  const total = phase.twoWeekSections.length;
  progressCount.textContent = `${completed}/${total}`;
}

function updateOverallProgress() {
  // Calculate total sub-topics across all phases
  let totalSubTopics = 0;
  let completedSubTopics = 0;
  
  phasesData.forEach(phase => {
    totalSubTopics += phase.twoWeekSections.length;
    const completed = state.completedSubTopics[phase.id] ? state.completedSubTopics[phase.id].length : 0;
    completedSubTopics += completed;
  });
  
  const percentage = totalSubTopics > 0 ? (completedSubTopics / totalSubTopics) * 100 : 0;
  
  const progressBar = document.getElementById('overallProgress');
  const progressPercentage = document.getElementById('overallPercentage');
  
  progressBar.style.width = percentage + '%';
  progressPercentage.textContent = `${completedSubTopics}/${totalSubTopics} sub-topics (${Math.round(percentage)}%)`;
  
  // Update timeline when progress changes
  updateTimeline();
}


// Export Function - Expand all phases and generate PDF
function exportRoadmap() {
  // Update document title for PDF filename
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const originalTitle = document.title;
  document.title = `Cybersecurity-Roadmap-${dateStr}`;
  
  // First, expand all phases
  const phasesWereExpanded = [];
  document.querySelectorAll('.phase-node').forEach(node => {
    const phaseId = node.getAttribute('data-phase-id');
    const wasExpanded = node.classList.contains('expanded');
    phasesWereExpanded.push({ phaseId, wasExpanded });
    if (!wasExpanded) {
      node.classList.add('expanded');
    }
  });
  
  // Wait for content to render, then trigger print dialog
  setTimeout(() => {
    window.print();
    
    // Restore original expand/collapse state and title after printing
    setTimeout(() => {
      document.title = originalTitle;
      phasesWereExpanded.forEach(({ phaseId, wasExpanded }) => {
        const node = document.querySelector(`.phase-node[data-phase-id="${phaseId}"]`);
        if (node && !wasExpanded) {
          node.classList.remove('expanded');
        }
      });
    }, 500);
  }, 300);
}

// Dark Mode Functions
function initDarkMode() {
  // Check if user has a preference in state
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  state.darkMode = prefersDark;
  
  if (state.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateDarkModeButton();
  }
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  
  if (state.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  updateDarkModeButton();
  saveProgressToStorage();
}

function updateDarkModeButton() {
  const btn = document.getElementById('darkModeToggle');
  if (btn) {
    btn.textContent = state.darkMode ? '☀️' : '🌙';
    btn.title = state.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  
  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  
  // Zoom controls
  document.getElementById('zoomIn').addEventListener('click', zoomIn);
  document.getElementById('zoomOut').addEventListener('click', zoomOut);
  document.getElementById('resetView').addEventListener('click', resetView);
  
  // Expand/Collapse all
  document.getElementById('expandAll').addEventListener('click', expandAllPhases);
  document.getElementById('collapseAll').addEventListener('click', collapseAllPhases);
  
  // Export
  document.getElementById('exportSVG').addEventListener('click', exportRoadmap);
  
  // Date picker
  const startDatePicker = document.getElementById('startDatePicker');
  startDatePicker.addEventListener('change', (e) => {
    const newDate = new Date(e.target.value + 'T00:00:00');
    if (!isNaN(newDate.getTime())) {
      state.startDate = newDate;
      updateAllDates();
      saveProgressToStorage();
    }
  });
  
  // Pan functionality REMOVED - users can only scroll vertically
  // Scroll wheel zoom removed - use buttons only
  
  // Tooltip movement
  document.addEventListener('mousemove', (e) => {
    const tooltip = document.getElementById('tooltip');
    if (tooltip.classList.contains('visible')) {
      positionTooltip(e);
    }
  });
}

// Update all dates when start date changes
function updateAllDates() {
  // Update the displayed start date
  document.getElementById('startDate').textContent = formatDate(state.startDate);
  
  // Re-render timeline with new dates
  const timelinePhases = document.getElementById('timelinePhases');
  timelinePhases.innerHTML = '';
  
  let cumulativeWeeks = 0;
  
  phasesData.forEach(phase => {
    const phaseWeeks = calculatePhaseWeeks(phase);
    const startWeek = cumulativeWeeks;
    const endWeek = cumulativeWeeks + phaseWeeks;
    
    const startDate = addWeeks(state.startDate, startWeek);
    const endDate = addWeeks(state.startDate, endWeek);
    
    const phaseItem = document.createElement('div');
    phaseItem.className = 'timeline-phase-item';
    phaseItem.style.borderLeftColor = phase.color;
    phaseItem.setAttribute('data-phase-id', phase.id);
    
    const phaseInfo = document.createElement('div');
    phaseInfo.className = 'timeline-phase-info';
    
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'timeline-phase-header';
    
    const phaseIcon = document.createElement('span');
    phaseIcon.className = 'timeline-phase-icon';
    phaseIcon.textContent = phase.icon;
    
    const phaseName = document.createElement('span');
    phaseName.className = 'timeline-phase-name';
    phaseName.textContent = phase.name;
    
    const phaseWeeksSpan = document.createElement('span');
    phaseWeeksSpan.className = 'timeline-phase-weeks';
    phaseWeeksSpan.textContent = `Weeks ${phase.weeks}`;
    phaseWeeksSpan.setAttribute('data-phase-id', phase.id);
    
    phaseHeader.appendChild(phaseIcon);
    phaseHeader.appendChild(phaseName);
    phaseHeader.appendChild(phaseWeeksSpan);
    
    const phaseDates = document.createElement('div');
    phaseDates.className = 'timeline-phase-dates';
    phaseDates.textContent = `${formatDate(startDate)} - ${formatDate(endDate)} (${phaseWeeks} weeks)`;
    
    phaseInfo.appendChild(phaseHeader);
    phaseInfo.appendChild(phaseDates);
    
    const phaseProgress = document.createElement('div');
    phaseProgress.className = 'timeline-phase-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'timeline-phase-progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'timeline-phase-progress-fill';
    progressFill.style.backgroundColor = phase.color;
    
    // Get current progress
    const phaseTotal = phase.twoWeekSections.length;
    const phaseCompleted = state.completedSubTopics[phase.id] ? state.completedSubTopics[phase.id].length : 0;
    const phasePercentage = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;
    
    progressFill.style.width = phasePercentage + '%';
    progressFill.setAttribute('data-phase-id', phase.id);
    
    progressBar.appendChild(progressFill);
    
    const progressText = document.createElement('div');
    progressText.className = 'timeline-phase-progress-text';
    progressText.setAttribute('data-phase-id', phase.id);
    progressText.textContent = `${phaseCompleted}/${phaseTotal}`;
    
    phaseProgress.appendChild(progressBar);
    phaseProgress.appendChild(progressText);
    
    phaseItem.appendChild(phaseInfo);
    phaseItem.appendChild(phaseProgress);
    
    timelinePhases.appendChild(phaseItem);
    
    cumulativeWeeks = endWeek;
  });
  
  // Update the timeline status section
  updateTimeline();
}

// Calculate remaining weeks for a phase based on completed sub-topics
function calculatePhaseWeeks(phase) {
  const totalSections = phase.twoWeekSections.length;
  const completedSections = state.completedSubTopics[phase.id] ? state.completedSubTopics[phase.id].length : 0;
  const remainingSections = totalSections - completedSections;
  return remainingSections * 2; // Each section is 2 weeks
}

// Timeline Functions
function renderTimeline() {
  const timelinePhases = document.getElementById('timelinePhases');
  
  let cumulativeWeeks = 0;
  
  phasesData.forEach(phase => {
    const phaseWeeks = parseInt(phase.weeks.split('-')[1]) - parseInt(phase.weeks.split('-')[0]) + 1;
    const startWeek = cumulativeWeeks;
    const endWeek = cumulativeWeeks + phaseWeeks;
    
    const startDate = addWeeks(state.startDate, startWeek);
    const endDate = addWeeks(state.startDate, endWeek);
    
    const phaseItem = document.createElement('div');
    phaseItem.className = 'timeline-phase-item';
    phaseItem.style.borderLeftColor = phase.color;
    phaseItem.setAttribute('data-phase-id', phase.id);
    
    const phaseInfo = document.createElement('div');
    phaseInfo.className = 'timeline-phase-info';
    
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'timeline-phase-header';
    
    const phaseIcon = document.createElement('span');
    phaseIcon.className = 'timeline-phase-icon';
    phaseIcon.textContent = phase.icon;
    
    const phaseName = document.createElement('span');
    phaseName.className = 'timeline-phase-name';
    phaseName.textContent = phase.name;
    
    const phaseWeeksSpan = document.createElement('span');
    phaseWeeksSpan.className = 'timeline-phase-weeks';
    phaseWeeksSpan.textContent = `Weeks ${phase.weeks}`;
    
    phaseHeader.appendChild(phaseIcon);
    phaseHeader.appendChild(phaseName);
    phaseHeader.appendChild(phaseWeeksSpan);
    
    const phaseDates = document.createElement('div');
    phaseDates.className = 'timeline-phase-dates';
    phaseDates.textContent = `${formatDate(startDate)} - ${formatDate(endDate)}`;
    
    phaseInfo.appendChild(phaseHeader);
    phaseInfo.appendChild(phaseDates);
    
    const phaseProgress = document.createElement('div');
    phaseProgress.className = 'timeline-phase-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'timeline-phase-progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'timeline-phase-progress-fill';
    progressFill.style.backgroundColor = phase.color;
    progressFill.style.width = '0%';
    progressFill.setAttribute('data-phase-id', phase.id);
    
    progressBar.appendChild(progressFill);
    
    const progressText = document.createElement('div');
    progressText.className = 'timeline-phase-progress-text';
    progressText.setAttribute('data-phase-id', phase.id);
    progressText.textContent = `0/${phase.twoWeekSections.length}`;
    
    phaseProgress.appendChild(progressBar);
    phaseProgress.appendChild(progressText);
    
    phaseItem.appendChild(phaseInfo);
    phaseItem.appendChild(phaseProgress);
    
    timelinePhases.appendChild(phaseItem);
    
    cumulativeWeeks = endWeek;
  });
}

function updateTimeline() {
  // Calculate total progress
  let totalSubTopics = 0;
  let completedSubTopics = 0;
  let totalWeeksRemaining = 0;
  
  // Update phase dates in timeline section and calculate totals
  let cumulativeWeeks = 0;
  
  phasesData.forEach(phase => {
    const phaseTotal = phase.twoWeekSections.length;
    const phaseCompleted = state.completedSubTopics[phase.id] ? state.completedSubTopics[phase.id].length : 0;
    const phaseWeeks = calculatePhaseWeeks(phase);
    
    totalSubTopics += phaseTotal;
    completedSubTopics += phaseCompleted;
    totalWeeksRemaining += phaseWeeks;
    
    // Calculate dates for this phase
    const startWeek = cumulativeWeeks;
    const endWeek = cumulativeWeeks + phaseWeeks;
    const startDate = addWeeks(state.startDate, startWeek);
    const endDate = addWeeks(state.startDate, endWeek);
    
    // Update phase dates in timeline
    const phaseItem = document.querySelector(`.timeline-phase-item[data-phase-id="${phase.id}"]`);
    if (phaseItem) {
      const phaseDates = phaseItem.querySelector('.timeline-phase-dates');
      if (phaseDates) {
        phaseDates.textContent = `${formatDate(startDate)} - ${formatDate(endDate)} (${phaseWeeks} weeks)`;
      }
    }
    
    // Update phase progress in timeline
    const progressFill = document.querySelector(`.timeline-phase-progress-fill[data-phase-id="${phase.id}"]`);
    const progressText = document.querySelector(`.timeline-phase-progress-text[data-phase-id="${phase.id}"]`);
    
    if (progressFill && progressText) {
      const phasePercentage = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;
      progressFill.style.width = phasePercentage + '%';
      progressText.textContent = `${phaseCompleted}/${phaseTotal}`;
    }
    
    cumulativeWeeks = endWeek;
  });
  
  const percentage = totalSubTopics > 0 ? (completedSubTopics / totalSubTopics) * 100 : 0;
  const remainingSubTopics = totalSubTopics - completedSubTopics;
  
  // Calculate completion date from Learning Start date
  const completionDate = addWeeks(state.startDate, totalWeeksRemaining);
  
  // Update timeline status
  document.getElementById('statusWeeksRemaining').textContent = totalWeeksRemaining;
  document.getElementById('statusSubTopicsRemaining').textContent = remainingSubTopics;
  document.getElementById('statusProgress').textContent = Math.round(percentage) + '%';
  document.getElementById('statusJobReadyDate').textContent = formatDateMonthYear(completionDate);
  
  // Update top completion date (Month Year format)
  document.getElementById('endDate').textContent = formatDateMonthYear(completionDate);
  document.getElementById('weeksRemaining').textContent = `${totalWeeksRemaining} weeks`;
}

function addWeeks(date, weeks) {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatDateMonthYear(date) {
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
