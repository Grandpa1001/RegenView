import { Avatar, Table, Group, Text, ActionIcon, Menu, ScrollArea } from '@mantine/core';
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from '@tabler/icons';

interface UsersStackProps {
  data2: { avatar: string; name: string; eth: number; usd: number; pln: number }[];
}

export function UsersStack({ data2 }: UsersStackProps) {
  const rows = data2.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text size="sm" weight={500}>
            {item.eth}
            </Text>
            <Text color="dimmed" size="xs">
            {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.usd.toFixed(2)+" USD"}</Text>
      </td>
      <td>
        <Text size="sm">{item.pln.toFixed(2)+" PLN"}</Text>
        
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}