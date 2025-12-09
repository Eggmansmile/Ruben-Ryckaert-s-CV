export const CONFIG = {
  name: "Ruben Aaron Ryckaert",
  title: "Industrial Engineering Student",
  email: "ruben.ryckaert89@gmail.com",
  phone: "+32 468 45 98 66",
  website: "www.linkedin.com/in/ruben-ryckaert", // Placeholder updated to a likely professional link or generic
  location: "Leuven, Belgium",
  social: {
    github: "https://github.com/Eggmansmile",
    linkedin: "https://www.linkedin.com/in/ruben-ryckaert-2b4717297/",
  },
  meta: {
    description: "Portfolio of Ruben Aaron Ryckaert, an Industrial Engineering student and developer."
  }
};

export const getAssetUrl = (path: string) => {
  // In development, import.meta.env.BASE_URL is usually '/'
  // In production, it will be '/Ruben-Ryckaert-s-CV/' (or whatever is set in vite.config.ts)
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Clean the path (remove leading slash)
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure we don't end up with // if baseUrl is just /
  if (baseUrl === '/') {
    return `/${cleanPath}`;
  }
  
  // If baseUrl ends with /, append cleanPath
  if (baseUrl.endsWith('/')) {
    return `${baseUrl}${cleanPath}`;
  }
  
  return `${baseUrl}/${cleanPath}`;
};