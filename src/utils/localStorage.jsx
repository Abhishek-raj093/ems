// localStorage.clear()

const employees = [
    {
      "Id": 1,
      "firstName": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Update landing page UI",
          "taskDescription": "Redesign the hero section with new color scheme",
          "taskDate": "2025-04-25",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix login bug",
          "taskDescription": "Resolve issue with JWT token validation",
          "taskDate": "2025-04-23",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Write unit tests",
          "taskDescription": "Add test cases for the payment module",
          "taskDate": "2025-04-24",
          "category": "Testing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "Id": 2,
      "firstName": "Neha",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Prepare sprint report",
          "taskDescription": "Summarize progress for sprint 10",
          "taskDate": "2025-04-22",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Code review",
          "taskDescription": "Review PR #2345 from UI team",
          "taskDate": "2025-04-24",
          "category": "Review",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Optimize queries",
          "taskDescription": "Refactor MongoDB queries for faster load time",
          "taskDate": "2025-04-23",
          "category": "Development",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Handle client feedback",
          "taskDescription": "Address feedback from last client demo",
          "taskDate": "2025-04-25",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "Id": 3,
      "firstName": "Rohan",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Create onboarding flow",
          "taskDescription": "Design onboarding flow for new users",
          "taskDate": "2025-04-21",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Setup staging server",
          "taskDescription": "Deploy latest build to staging environment",
          "taskDate": "2025-04-22",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write blog post",
          "taskDescription": "Draft a technical blog on caching strategies",
          "taskDate": "2025-04-26",
          "category": "Content",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Integrate third-party API",
          "taskDescription": "Use weather API for home screen widget",
          "taskDate": "2025-04-24",
          "category": "Integration",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "Id": 4,
      "firstName": "Ishita",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Fix alignment bug",
          "taskDescription": "Correct alignment issue in user profile page",
          "taskDate": "2025-04-20",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Test billing flow",
          "taskDescription": "Ensure billing flow handles invalid cards",
          "taskDate": "2025-04-25",
          "category": "QA",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare release notes",
          "taskDescription": "Summarize features and fixes in v2.3",
          "taskDate": "2025-04-24",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "Id": 5,
      "firstName": "Karan",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Sync with marketing",
          "taskDescription": "Align launch schedule with marketing team",
          "taskDate": "2025-04-23",
          "category": "Communication",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Create analytics dashboard",
          "taskDescription": "Design dashboard for tracking user behavior",
          "taskDate": "2025-04-22",
          "category": "Analytics",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update user guide",
          "taskDescription": "Revise instructions for new features",
          "taskDate": "2025-04-21",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Fix image upload issue",
          "taskDescription": "Resolve error in image compression module",
          "taskDate": "2025-04-25",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];
  
  const admin = [
    {
      "Id": 1,
    //   "firstName": "Vikram",
      "email": "admin@example.com",
      "password": "123"
    }
  ];  

  export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
  }