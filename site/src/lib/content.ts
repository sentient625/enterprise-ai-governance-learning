const rawLoaders = import.meta.glob('../../../{00_LEARNING_CONTROL,01_AI_AGENT_IDENTITY_GOVERNANCE,02_OPERATIONAL_AI_GOVERNANCE}/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

const keyByRelativePath = new Map<string, string>();
for (const key of Object.keys(rawLoaders)) {
  const match = key.match(/(00_LEARNING_CONTROL|01_AI_AGENT_IDENTITY_GOVERNANCE|02_OPERATIONAL_AI_GOVERNANCE)\/.+\.md$/);
  if (match) keyByRelativePath.set(match[0], key);
}

export async function getDocument(relativePath: string): Promise<string | null> {
  const key = keyByRelativePath.get(relativePath);
  if (!key) return null;
  const loader = rawLoaders[key];
  if (!loader) return null;
  return loader();
}
