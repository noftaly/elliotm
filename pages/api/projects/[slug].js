import projects from '../data';

export default function handler(req, res) {
  const project = projects.find(project => project.slug === req.query.slug);
  if (project) {
    res.status(200).json(project);
    return;
  }

  res.status(404).json({ message: `Project ${req.query.slug} not found.` });
}
