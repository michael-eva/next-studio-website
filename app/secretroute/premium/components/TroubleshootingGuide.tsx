import { useState, useMemo } from 'react';
import { issues, troubleshootingData } from '../data';
import { Search, Filter, ExternalLink, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { EnhancedTroubleshootingTips } from '../../../components/TroubleshootingGuideData';

interface Issue {
  id: string;
  platform: string;
  title: string;
  category: string;
  severity: string;
  tags: string[];
  description: string;
  symptoms: string[];
  solutions: {
    method: string;
    description: string;
  }[];
  frameworkSteps: number[];
}

interface Platform {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  issueCount: number;
  status: string;
}

interface Severity {
  id: string;
  name: string;
  color: string;
  description: string;
}

export default function TroubleshootingGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const getSeverityColor = (severity: string) => {
    const severityObj = troubleshootingData.severities.find((s: Severity) => s.id === severity);
    return severityObj?.color || '#6b7280';
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertCircle className="w-4 h-4" />;
      case 'moderate': return <Clock className="w-4 h-4" />;
      case 'minor': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const filteredIssues = useMemo(() => {
    let filteredIssues = issues;

    if (selectedPlatform) {
      filteredIssues = filteredIssues.filter(issue => issue.platform === selectedPlatform);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredIssues = filteredIssues.filter((issue: Issue) =>
        issue.title.toLowerCase().includes(term) ||
        (issue.description && issue.description.toLowerCase().includes(term)) ||
        issue.tags.some((tag: string) => tag.toLowerCase().includes(term)) ||
        issue.symptoms.some((symptom: string) => symptom.toLowerCase().includes(term))
      );
    }

    if (selectedCategory !== 'all') {
      filteredIssues = filteredIssues.filter((issue: Issue) => issue.category === selectedCategory);
    }

    if (selectedSeverity !== 'all') {
      filteredIssues = filteredIssues.filter((issue: Issue) => issue.severity === selectedSeverity);
    }

    return filteredIssues;
  }, [selectedPlatform, searchTerm, selectedCategory, selectedSeverity]);

  return (
    <div className="space-y-8">
      {/* Universal Troubleshooting Tips Section */}
      <EnhancedTroubleshootingTips />

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search across all platforms for issues, symptoms, or solutions..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Quick Filters:</span>
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {troubleshootingData.categories.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            {troubleshootingData.severities.map((sev: any) => (
              <option key={sev.id} value={sev.id}>{sev.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {troubleshootingData.platforms.map((platform: Platform) => (
          <div
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform"
                style={{ backgroundColor: platform.color }}
              >
                {platform.logo}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{platform.description}</p>
            <div className="flex items-center justify-between">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${platform.color}20`,
                  color: platform.color
                }}
              >
                {platform.issueCount} issues
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Global Search Results */}
      {searchTerm && !selectedPlatform && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Search Results ({filteredIssues.length})
          </h2>
          <div className="space-y-4">
            {filteredIssues.map((issue: Issue) => {
              const platform = troubleshootingData.platforms.find((p: Platform) => p.id === issue.platform);
              return (
                <div key={issue.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: platform?.color }}
                    >
                      {platform?.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-600">{platform?.name}</span>
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-white"
                          style={{ backgroundColor: getSeverityColor(issue.severity) }}
                        >
                          {getSeverityIcon(issue.severity)}
                          {issue.severity.toUpperCase()}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
                      <button
                        onClick={() => setSelectedPlatform(issue.platform)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}