import React from 'react';
import {
  Users,
  Target,
  ShoppingCart,
  UserCheck,
  BarChart2,
  Workflow,
  Link,
  Shield,
  Bell,
  Settings,
} from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, icon, features }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        {icon}
      </div>
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const modules = [
  {
    title: 'Lead Management',
    description: 'Capture, organize, and nurture leads effectively',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    features: [
      'Lead Capture Forms',
      'Lead Scoring',
      'Lead Segmentation',
      'Lead Assignment',
      'Lead Nurturing'
    ]
  },
  {
    title: 'Opportunity Management',
    description: 'Track and manage deals through the sales pipeline',
    icon: <Target className="w-6 h-6 text-blue-600" />,
    features: [
      'Pipeline Management',
      'Deal Tracking',
      'Task Creation',
      'Collaboration Tools',
      'Forecasting'
    ]
  },
  {
    title: 'Sales Execution',
    description: 'Execute sales activities efficiently',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    features: [
      'Proposal Generation',
      'Quote Management',
      'Contract Management',
      'Email Integration',
      'Meeting Scheduling'
    ]
  },
  {
    title: 'Customer Management',
    description: 'Maintain and grow customer relationships',
    icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    features: [
      'Customer Onboarding',
      'Support Integration',
      'Feedback Collection',
      'Upsell Opportunities',
      'Renewal Management'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Generate insights from your CRM data',
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    features: [
      'Custom Dashboards',
      'Performance Reports',
      'Pipeline Analytics',
      'ROI Analysis',
      'Trend Analysis'
    ]
  },
  {
    title: 'Task & Workflow',
    description: 'Automate and streamline processes',
    icon: <Workflow className="w-6 h-6 text-blue-600" />,
    features: [
      'Task Automation',
      'Workflow Builder',
      'Task Assignment',
      'Priority Management',
      'Notifications'
    ]
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools',
    icon: <Link className="w-6 h-6 text-blue-600" />,
    features: [
      'Email Integration',
      'Calendar Sync',
      'Payment Gateways',
      'E-Signature',
      'API Access'
    ]
  },
  {
    title: 'Security',
    description: 'Protect your sensitive data',
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    features: [
      'User Authentication',
      'Role-Based Access',
      'Data Encryption',
      'Audit Logs',
      '2FA'
    ]
  },
  {
    title: 'Notifications',
    description: 'Stay informed of important updates',
    icon: <Bell className="w-6 h-6 text-blue-600" />,
    features: [
      'Real-Time Alerts',
      'Email Notifications',
      'SMS Alerts',
      'Chat Integration',
      'Custom Rules'
    ]
  },
  {
    title: 'Administration',
    description: 'Manage system settings and configurations',
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    features: [
      'User Management',
      'Pipeline Setup',
      'Custom Fields',
      'Workflow Config',
      'System Settings'
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">SalesPro CRM</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sales & Marketing CRM Modules</h1>
          <p className="mt-2 text-gray-600">Comprehensive tools to manage your entire sales and marketing process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;