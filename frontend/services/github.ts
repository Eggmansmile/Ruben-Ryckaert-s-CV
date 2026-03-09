// GitHub API service and data types
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  size: number;
  topics: string[];
  homepage: string | null;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  blog: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'Eggmansmile';

// Cache data to avoid repeated API calls
let cachedRepos: GitHubRepo[] | null = null;
let cachedUser: GitHubUser | null = null;

export const githubService = {
  // Get user profile data
  async getUser(): Promise<GitHubUser> {
    if (cachedUser) return cachedUser;

    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      
      const userData = await response.json();
      cachedUser = userData;
      return userData;
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
      // Return fallback data
      return {
        login: USERNAME,
        name: "Ruben Ryckaert",
        bio: "uni student trying to better understand IT",
        location: "Leuven",
        blog: "https://75.119.131.242:82/",
        avatar_url: "https://avatars.githubusercontent.com/u/200574456?v=4",
        html_url: `https://github.com/${USERNAME}`,
        public_repos: 6,
        followers: 0,
        following: 0,
        created_at: "2024-01-01T00:00:00Z"
      };
    }
  },

  // Get user repositories
  async getRepos(): Promise<GitHubRepo[]> {
    if (cachedRepos) return cachedRepos;

    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=100`);
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const reposData = await response.json();
      cachedRepos = reposData;
      return reposData;
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      // Return fallback data
      return [
        {
          id: 1,
          name: "inventree-app",
          full_name: `${USERNAME}/inventree-app`,
          description: "InvenTree mobile app",
          html_url: `https://github.com/${USERNAME}/inventree-app`,
          language: "Dart",
          stargazers_count: 0,
          forks_count: 0,
          created_at: "2025-04-25T20:49:06Z",
          updated_at: "2025-04-28T13:38:25Z",
          size: 5865,
          topics: [],
          homepage: "https://docs.inventree.org/app"
        },
        {
          id: 2,
          name: "Inventree-assistent",
          full_name: `${USERNAME}/Inventree-assistent`,
          description: "barcode scanner that automatically removes items from our InvenTree stockage",
          html_url: `https://github.com/${USERNAME}/Inventree-assistent`,
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          created_at: "2025-07-04T13:43:47Z",
          updated_at: "2025-08-24T11:36:36Z",
          size: 51,
          topics: [],
          homepage: null
        }
      ];
    }
  },

  // Get languages used across all repositories
  async getLanguages(): Promise<string[]> {
    const repos = await this.getRepos();
    const languages = repos
      .map(repo => repo.language)
      .filter(lang => lang !== null)
      .filter((lang, index, arr) => arr.indexOf(lang) === index);
    return languages;
  },

  // Get total stars across all repositories
  async getTotalStars(): Promise<number> {
    const repos = await this.getRepos();
    return repos.reduce((total, repo) => total + repo.stargazers_count, 0);
  },

  // Get repository count
  async getRepoCount(): Promise<number> {
    const repos = await this.getRepos();
    return repos.length;
  },

  // Format repository size
  formatRepoSize(sizeInKB: number): string {
    if (sizeInKB < 1024) return `${sizeInKB} KB`;
    return `${(sizeInKB / 1024).toFixed(1)} MB`;
  },

  // Get language color for display
  getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Dart': '#00B4AB',
      'TeX': '#3D6117',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Python': '#3572A5',
      'Java': '#b07219',
    };
    return language ? colors[language] || '#858585' : '#858585';
  }
};

// Clear cache function
export const clearGitHubCache = (): void => {
  cachedRepos = null;
  cachedUser = null;
};
