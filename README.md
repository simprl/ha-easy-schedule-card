# Easy Schedule Card

Easy Schedule Card is a compact Home Assistant Lovelace card for user-editable
time schedules. The first backend adapter targets
[`scheduler-component`](https://github.com/nielsfaber/scheduler-component).

The card is intentionally simple: developers define one controlled target per
card in YAML, while users edit only time, weekdays, and value.

## Features

- Boolean and numeric schedule values.
- Compact weekday selector.
- Add, inline edit, enable/disable, and delete rules.
- Localized UI for English and Ukrainian. Russian HA locale currently uses the
  same Ukrainian strings by project convention.

Design rationale, rejected options, backend plan, and migration notes are kept
in the private source repository. This HACS repository contains only the
installable card artifact and public usage notes.

## HACS Installation

1. Open `HACS -> Frontend`.
2. Add this repository as a custom repository with category `Lovelace`.
3. Install `Easy Schedule Card`.
4. Add the Lovelace resource if HACS does not add it automatically:

   ```text
   /hacsfiles/ha-easy-schedule-card/easy-schedule-card.js
   ```

   Resource type: `JavaScript module`.

## YAML Example

```yaml
type: custom:easy-schedule-card
title: Easy Schedule
schedule_id: core_switch
value_type: boolean
target_entity_id: switch.core_switch
```

`value_type` is currently explicit by design. Supported values:

- `boolean`
- `number`

For numeric targets, configure range metadata when useful:

```yaml
type: custom:easy-schedule-card
schedule_id: target_temperature
value_type: number
target_entity_id: input_number.target_temperature
min: 16
max: 28
step: 0.5
unit: C
```

## Admin Card

Use the admin card to find scheduler items that are not owned by the configured
Easy Schedule cards. Items are treated as expected only when they have both
`easy_schedule_card` and `easy_schedule:<id>` tags, and `<id>` is listed in
`known_schedule_ids`.

```yaml
type: custom:easy-schedule-admin-card
title: Orphan schedules
known_schedule_ids:
  - boiler_summer
  - boiler_winter
```

The admin card can disable orphan scheduler switches and delete scheduler items.
Delete always asks for browser confirmation first.

## Backend Requirements

The current version expects `scheduler-component` to be installed and configured
in Home Assistant. The card uses:

- `GET /api/scheduler/list`
- `POST /api/scheduler/add`
- `POST /api/scheduler/edit`
- `POST /api/scheduler/remove`

The card stores ownership tags on created scheduler rules:

```text
easy_schedule_card
easy_schedule:<schedule id>
```

## Development

Install dependencies:

```powershell
npm install
```

Check and build:

```powershell
npm run check
npm run build
```

The build writes `easy-schedule-card.js` to the repository root. This file is
the HACS/browser artifact and should be committed with releases.

For development Home Assistant environments without HACS, build this repository
first, then use the deployment tooling from the relevant HA development
workspace to vendor `easy-schedule-card.js`.
