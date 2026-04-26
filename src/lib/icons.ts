import shield from 'lucide-static/icons/shield.svg?raw';
import radio from 'lucide-static/icons/radio.svg?raw';
import target from 'lucide-static/icons/target.svg?raw';
import medal from 'lucide-static/icons/medal.svg?raw';
import compass from 'lucide-static/icons/compass.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import crosshair from 'lucide-static/icons/crosshair.svg?raw';

const map: Record<string, string> = {
  shield,
  radio,
  target,
  medal,
  compass,
  users,
  crosshair,
};

export function getIcon(name: string): string {
  return map[name] ?? map.crosshair!;
}
